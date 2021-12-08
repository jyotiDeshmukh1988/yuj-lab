import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  public personAdress = ['Pune', '411057', 'Wakad'];
  constructor() {}

  ngOnInit(): void {}
  getDetails(data: any) {
    console.log(`data from child to parent --> ${data}`);
  }
}
