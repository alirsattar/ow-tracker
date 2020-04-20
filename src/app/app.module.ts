import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputfieldsComponent } from './components/inputfields/inputfields.component';
import { GoogleSheetsService } from './services/google-sheets.service';

@NgModule({
  declarations: [
    AppComponent,
    InputfieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    GoogleSheetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
