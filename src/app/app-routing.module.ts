import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component'
import { AddressesComponent } from './addresses/addresses.component'
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'Addresses', component: AddressesComponent },
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
