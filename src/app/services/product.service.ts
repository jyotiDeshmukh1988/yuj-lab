import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor() {}

  getProductList() {
    /*return [
      {
        name: 'Foo',
        desc: 'Foo Desc',
        price: 24,
      },
      {
        name: 'Bar',
        desc: 'Bar Desc',
        price: 10,
      },
    ];
    */
  }
  getProductProfiles() {
    return [
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
    ];
  }
}
