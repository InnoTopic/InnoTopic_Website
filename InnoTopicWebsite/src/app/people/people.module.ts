import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';
import { ThemeConfigComponent } from '../themes/theme-config/theme-config.component';

import { PeoplePage } from './people.page';
import {TopicsSharedModule} from "../topics-shared/topics-shared.module";
import { ThemeDemoPageModule } from '../themes/theme-demo/theme-demo.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PeoplePageRoutingModule,
        TopicsSharedModule,
        ThemeDemoPageModule

    ],
  declarations: [PeoplePage
    ]
})
export class PeoplePageModule {}
