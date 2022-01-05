import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
//import { ProductService } from '../services/product.service';

@Component({
  selector: 'yuj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public homeproductProfiles: any;
  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.homeproductProfiles = this.productSrv.getProductProfiles();
  }
}
