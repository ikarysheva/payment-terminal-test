import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    AppRoutingModule
  ],
  declarations: [MainComponent]
})
export class CoreModule { }
