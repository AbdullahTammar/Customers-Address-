import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  add(id:number,name:string) {
    this.customerService.add(id,name);
    this.router.navigate(['']);
  }

}
