import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { ProductService } from '../services/product.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'yuj-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css'],
})
export class ListProfileComponent implements OnInit {
  public productProfiles: any;
  /*public productProfiles = [
    {
      name: 'Build',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product for Build',
      productFeatures: ['Cloud firestore', 'Authenication'],
    },
    {
      name: 'Relase and Monitoring',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product Relase and Monitoring',
      productFeatures: ['File monitoring', 'Google Analis]t'],
    },
    {
      name: 'Engage',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product list Engage',
      productFeatures: ['Remote firestore', 'Google Authenication'],
    },
  ];*/
  constructor(
    private configSrv: ConfigService,
    private productSrv: ProductService,
    private profileSrv: ProfileService,
    private route: ActivatedRoute
  ) {
    // private productSrv = new ProductService
  }

  ngOnInit(): void {
    this.productSrv.getProductList().subscribe((data) => {
      console.log(`data comming from node backend`);
      console.log(data);
    });

    let pprof = this.profileSrv.name;
    console.log(pprof);
    console.log(this.route);

    this.productProfiles = this.productSrv.getProductProfiles();

    this.configSrv.getConfigs().subscribe((data) => {
      console.log(data);
    });
  }
}
