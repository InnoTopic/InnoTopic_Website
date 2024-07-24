import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import { ShirtGeneratorPageRoutingModule } from './shirt-generator-routing.module';

import { ShirtGeneratorPage } from './shirt-generator.page';
import { PromptInputComponent } from './components/prompt-input/prompt-input.component';
import { PromptResultComponent } from './components/prompt-result/prompt-result.component';
import { PreviewComponent } from './components/preview/preview.component';
import { AiEngineFactory } from './models/ai-engine.factory';
import { ShirtGeneratorService } from './services/shirt-generator.service';
import { WindowDotAiTopicsPromptService } from './services/window-dot-ai-topics-prompt.service';
import { TopicsSharedModule } from "../topics-shared/topics-shared.module";
import { DummyTopicsPromptService } from './services/dummy-topics-prompt.service';

const componentDeclarations = [
  PromptInputComponent,
  PromptResultComponent,
  PreviewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtGeneratorPageRoutingModule,
    TopicsSharedModule
],
  declarations: [
    ShirtGeneratorPage,
    ...componentDeclarations,
  ],
  providers: [
    ShirtGeneratorService,
    {provide: AiEngineFactory, useClass: DummyTopicsPromptService}, // <- TODO: @joisco Remove this
    // {provide: AiEngineFactory, useClass: WindowDotAiTopicsPromptService} // <- TODO: @joisco use this
  ]
})
export class ShirtGeneratorPageModule {}
