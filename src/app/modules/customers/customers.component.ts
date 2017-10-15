import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customersList = [];

  constructor(private _shared: SharedService) {
    this._shared.getCustomersList().subscribe(
      data => this.customersList = data,
      err => {}
    )
  }

  ngOnInit() {
  }

}
