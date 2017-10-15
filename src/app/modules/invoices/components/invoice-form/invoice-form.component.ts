import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class InvoiceFormComponent implements OnInit, OnDestroy {
  invoiceForm: FormGroup;
  editQuantityForm: FormGroup;

  public customersList = [];
  public productsList = [];
  public invoiceItems = [];
  private invoice: any = {};
  private total: number = 0;
  private productsTotalPrice: number = 0;
  private ignoreValueChanges: boolean = false;
  private updateExistingInvoice: boolean = false;
  public editQuantityId: number;

  constructor(
    private _shared: SharedService,
    private _invoices: InvoicesService,
    private route: ActivatedRoute ) {

      this.route.params.subscribe( params => {
        this.updateExistingInvoice = !Object.keys(params).length ? false : true;
        if(this.updateExistingInvoice) {
          this.ignoreValueChanges = true;
          this.getExistingInvoice(params.id);
          this.getInvoiceItems(params.id);
        }
      });

    }

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      customer_id: new FormControl('', [<any>Validators.required]),
      total: new FormControl(0),
      discount: new FormControl('', [<any>Validators.required])
    });

    this.editQuantityForm = new FormGroup({
      quantity: new FormControl('', [<any>Validators.required])
    })

    this.listenForFormChanges();
    this.getCustomersList();
    this.getProductsList();
  }

  ngOnDestroy() {
    this._invoices.setInvoiceFormAction(null);
  }

  private getCustomersList() {
    this._shared.getCustomersList().subscribe(
      data => this.customersList = data,
      err => {}
    );
  }

  private getProductsList() {
    this._shared.getProductsList().subscribe(
      data => this.productsList = data,
      err => {}
    )
  }

  private getExistingInvoice(id) {
    this._invoices.getInvoiceById(id).subscribe(
      data => {
        this.invoice = data;
        this.total = data.total;
        this.invoiceForm.controls['customer_id'].setValue(data.customer_id);
        this.invoiceForm.controls['discount'].setValue(data.discount);
        this.invoiceForm.controls['total'].setValue(data.total);
        this.total = data.total;
        this.ignoreValueChanges = false;
      }, err => {}
    )
  }

   private getInvoiceItems(id) {
    this.productsTotalPrice = 0;
    this._invoices.getInvoiceItems(id).subscribe(
      data => {
        data.forEach(item => {
          this._shared.getProductById(item.product_id).subscribe(
            data => {
              item.price = data.price;
              item.name = data.name;
            },
            err => {}
          )
        });
        this.invoiceItems = data;
        //Wery sorry for this, but i need to wait until items data will be full (need to get price for each item)
        setTimeout(wait => {
          this.calculateTotal(this.invoice.discount);
        }, 500)

      }, err => {}
     );
  }

  public addInvoiceItem(productId) {
    let body = {
      product_id: productId,
      quantity: 1
    }
    this._invoices.addInvoiceItem(this.invoice.id, body).subscribe(
      data => {
        this.getInvoiceItems(this.invoice.id);
       },
      err => {}
    )
  }

  private listenForFormChanges() {
    this.calculateTotal(this.invoice.discount);
    this.invoiceForm.valueChanges.debounceTime(1000).subscribe(data => {
      data.total = this.total;
      let dataObject = {
        formValue: data,
        invoiceId: this.invoice.id || '',
        updateExistingInvoice: this.updateExistingInvoice
      }
      if(this.invoiceForm.valid && !this.ignoreValueChanges) {
        this._invoices.setInvoiceFormAction(dataObject);
      }
    });
  }

  public updateInvoiceItemQuantity(itemId, data) {
    this._invoices.updateInvoiceItem(this.invoice.id, itemId, data).subscribe(
      data => this.getInvoiceItems(this.invoice.id),
      err => {}
    )
  }


  private calculateTotal(discount) {
    this.productsTotalPrice = 0;
    this.invoiceItems.forEach(item => {
      this.productsTotalPrice += item.price * item.quantity;
    })
    this.total = Math.round(this.productsTotalPrice - discount / 100 * this.productsTotalPrice);
    return this.total;
  }

  private setEditQuantityId(id) {
    this.editQuantityId = id;
  }

}
