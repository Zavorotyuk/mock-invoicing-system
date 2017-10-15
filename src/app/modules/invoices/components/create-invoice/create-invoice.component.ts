import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { InvoicesService } from '../../../../services/invoices.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit, OnDestroy {

  invoiceFormSubscription

  constructor(
    private _invoices: InvoicesService,
    private router: Router) {
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
    if(data) {
      this._invoices.createNewInvoice(data.formValue).subscribe(
        data => {
          this._invoices.setInvoiceFormAction(null);
          this.router.navigate([`/invoices/update/${data.id}`])
        },
        err => {}
      )
    }
  }

}
