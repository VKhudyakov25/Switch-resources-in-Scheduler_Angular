import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import {
  DxDataGridModule,
  DxDropDownBoxModule,
  DxSchedulerModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DxSchedulerModule,
    DxDropDownBoxModule,
    DxDataGridModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
