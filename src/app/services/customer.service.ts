import { Injectable } from '@angular/core';
import { Customers } from '../shared/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customers[] = [];

  constructor() { }

  getAll(): Customers[] {
    return this.customers;
  }

  getById(id: number): Customers {
    return this.customers.find(customer => customer.id === id);
  }

  add(id: number, name: string) {
    this.customers.push(new Customers(id, name));
  }

  delete(selectedCustomer: Customers) {
    this.customers.splice(this.customers.indexOf(selectedCustomer), 1)
  }

  update(selectedCustomer: Customers, newName: string) {
    this.customers.find(customer => customer.id === selectedCustomer.id).name = newName;
  }

}
