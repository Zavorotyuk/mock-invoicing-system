import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  private invoicesList = [];

  constructor(private invoices: InvoicesService) { }

  ngOnInit() {
    this.invoices.getInvoicesList().subscribe(
      data => this.invoicesList = data,
      err => console.log(err)
    )
  }

}
