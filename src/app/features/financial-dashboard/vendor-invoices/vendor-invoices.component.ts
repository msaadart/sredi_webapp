import { Component, Input, OnInit, signal } from '@angular/core';
import { TVendorInvoice, TTableHeader } from '../financial-dashboard.type';
import { FinancialServicesService } from '../financial-services.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-invoices',
  templateUrl: './vendor-invoices.component.html',
  styleUrl: './vendor-invoices.component.scss',
})
export class VendorInvoicesComponent implements OnInit {

  @Input() subHeading: string = '';

  readonly panelOpenState = signal(false);

  public vendorInvoicesrowData: TVendorInvoice[] = [];
  public vendorInvoiceHeader: TTableHeader[] = [
    { field: 'invoice_submitted', headerName:'Invoice Date' },
    { field: 'invoice_number', headerName:'Invoice Number' },
    { field: 'invoice_amount', headerName:'Invoice Amount' },
    { field: 'vendor_name', headerName:'Vendor Name' },
    { field: 'name_of_provider', headerName:'Name of Provider'},
    { field: 'project', headerName:'Project' },
    { field: 'description', headerName:'Description' },
    { field: 'is_SRED', headerName:'SR&ED' },
    { field: 'province', headerName:'Province' },
    { field: 'status', headerName:'Status' },
    {
      headerName: 'Action',
      cellRenderer: (params: any) =>
        `<button class="btn material-icons">edit</button>
     <button class="btn material-icons">delete</button>`
    },
  ];

  constructor(
    private RequestService: FinancialServicesService,
  ) { }

  ngOnInit(): void {
    this.RequestService.getVendorInvoices('vendor_invoices').subscribe((data) => {
      this.vendorInvoicesrowData = data;
    });
  }

  total_amount = new FormControl();


}
