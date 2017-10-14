import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SharedService } from '../../../../shared/shared.service';
import { InvoicesService } from '../../../../services/invoices.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;

  public customersList = [];
  private invoice: any = {};
  private ignoreValueChanges: boolean = true;
  private updateExistingInvoice: boolean = false;

  constructor(
    private _shared: SharedService,
    private _invoices: InvoicesService,
    private route: ActivatedRoute ) {

      this.route.params.subscribe( params => {
        this.updateExistingInvoice = !Object.keys(params).length ? false : true;
        if(this.updateExistingInvoice) {
          this._invoices.getInvoiceById(params.id).subscribe(
            data => {
              this.invoice = data;
              this.invoiceForm.controls['customer_id'].setValue(data.customer_id);
              this.invoiceForm.controls['discount'].setValue(data.discount);
              this.ignoreValueChanges = false;
            }, err => {}
          )
        }
      });

    }

  ngOnInit() {

    this.invoiceForm = new FormGroup({
      customer_id: new FormControl('', [<any>Validators.required]),
      total: new FormControl(),
      discount: new FormControl('', [<any>Validators.required])
    });

    this.invoiceForm.valueChanges.subscribe(data => {
      let dataObject = {
        formValue: data,
        invoiceId: this.invoice.id || '',
        updateExistingInvoice: this.updateExistingInvoice
      }
      if(this.invoiceForm.valid && !this.ignoreValueChanges) {
        this._invoices.setInvoiceFormAction(dataObject);
      }
    });
    
    this.getCustomersList();

  }

  private getCustomersList() {
    this._shared.getCustomersList().subscribe(
      data => this.customersList = data,
      err => {}
    );
  }

}
