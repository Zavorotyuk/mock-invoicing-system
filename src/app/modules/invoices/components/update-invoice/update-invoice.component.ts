import { Component, OnInit, OnDestroy } from '@angular/core';
import { InvoicesService } from '../../../../services/invoices.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.scss']
})
export class UpdateInvoiceComponent implements OnInit, OnDestroy {

  invoiceFormSubscription;

  constructor(private _invoices: InvoicesService) {
    this.invoiceFormSubscription = this._invoices.getInvoiceFormAction()
    .subscribe(this.invoiceFormSubscriptionHandler
      .bind(this));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.invoiceFormSubscription.unsubscribe();
  }

  private invoiceFormSubscriptionHandler(data) {
    console.log('Data', data)
    if(data) {
      this._invoices.updateInvoice(data.formValue, data.invoiceId).subscribe(
        data => { console.log('updated')},
        err => console.log(err)
      )
    }
  }

}
