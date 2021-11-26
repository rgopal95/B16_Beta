import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ToasterMessageComponent } from './toaster-message/toaster-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ToasterMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
