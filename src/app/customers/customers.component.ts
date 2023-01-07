import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customers } from '../shared/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customers[] = [];

  constructor(private customerService: CustomerService) { 
    this.setCustomers();
  }

  ngOnInit(): void {
  }

  setCustomers(){
    this.customers = this.customerService.getAll();
  }

}
