import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsList = [];

  constructor(private _shared: SharedService) {
    this._shared.getProductsList().subscribe(
      data => this.productsList = data,
      err => err
    )
  }

  ngOnInit() {
  }

}
