import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

export function setFormControlEnabled(formControl: AbstractControl, enable: boolean) {
  if ( enable ) {
    formControl.enable()
  } else {
    formControl.disable()
  }
}


export function isNullOrUndefinedOrWhiteSpace(s: string) {
  if ( ! s ) {
    return true
  }
  if ( s.trim() === '' ) {
    return true
  }
  return false
}

export function arrayOfObservablesToObservableOfArray<T>(arr: Array<Observable<T>>): Observable<Array<T>> {
  const combineLatest2: Observable<Array<T>> = combineLatest<T>(arr)
  return combineLatest2
}
