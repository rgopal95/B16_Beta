import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { KeyFilterPipe } from './pipe/key-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterComponent,
    KeyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
