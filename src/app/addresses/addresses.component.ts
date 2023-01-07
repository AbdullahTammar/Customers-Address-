import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Address } from '../shared/address';
import { Customers } from '../shared/customers';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  customer: Customers;
  id: number;

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.customer = customerService.getById(this.id);
  }

  ngOnInit(): void {
  }

  update(name: string) {
    this.customerService.update(this.customer, name);
  }

  deleteCustomer() {
    this.customerService.delete(this.customer)
    this.router.navigate(['']);
  }

  addAddress(address: string) {
    this.customer.addresses.push(new Address(address));
  }

  updateAddress(selectedAddress: Address, newAddress: string) {

    this.customer.addresses.find(a => a.name === selectedAddress.name).name = newAddress;

  }

  deleteAddress(selectedAddress: Address) {

     this.customer.addresses.splice(
       this.customer.addresses.indexOf(
         this.customer.addresses.find(
           a => a.name === selectedAddress.name)
       ), 1);

  }

}
