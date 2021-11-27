import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { MessageComponent } from './message/message.component';
import { timeout } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,ToastrModule.forRoot(
      {timeOut:5000,positionClass:'toast-top-center'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
