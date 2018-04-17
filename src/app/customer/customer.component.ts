import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Document} from '../models/document';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService, private sanitizer: DomSanitizer) {
    this.customer = customerService.selectedCustomer;
  }

  ngOnInit() {
  }

  getDocumentUrl(document: Document) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.customerService.getDocumentUrl(document.documentID, this.customer.id));
  }

}
