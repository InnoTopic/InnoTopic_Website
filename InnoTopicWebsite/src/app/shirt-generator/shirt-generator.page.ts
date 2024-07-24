import {Component, OnDestroy, OnInit} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, of, Subject, switchMap, takeUntil} from "rxjs";
import {ShirtGeneratorService} from "./services/shirt-generator.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-shirt-generator',
  templateUrl: './shirt-generator.page.html',
  styleUrls: ['./shirt-generator.page.scss'],
})
export class ShirtGeneratorPage implements OnInit, OnDestroy {

  searchEvent$ = new Subject<string>();
  isLoading$ = new Subject<boolean>();
  destroySubject = new Subject<void>();

  result$ = this.shirtGeneratorService.generatedContent$;

  constructor(
    private shirtGeneratorService: ShirtGeneratorService,
  ) {
  }

  ngOnInit() {
    this.searchEvent$.pipe(
      takeUntil(this.destroySubject),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((text) => {
        this.isLoading$.next(true);
        return this.shirtGeneratorService.generateTopics(text);
      }),
      catchError((error) => {
        this.shirtGeneratorService.clearGeneratedContent();
        return of(error)
      }),
      tap((res) => {
        console.log(`Result: `);
        console.log(res);
        this.shirtGeneratorService.setGeneratedContent(res);
        this.isLoading$.next(false)
      }),
    ).subscribe({})
  }

  onSearch(searchText: string) {
    this.searchEvent$.next(searchText);
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }

}
