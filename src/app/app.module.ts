import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddressesComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
