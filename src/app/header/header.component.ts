import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public myname = 'Shiressh Deshmukh';
  public personList = [
 'ab',
 'dd',
 'dsd'
  ];
  public personDetails = [
    {
      name : 'foo',
      addres : 'ppp',
      'age limit' : 40
    },
    {
      name : 'foobar',
      addres : 'pp321',
      'age limit' : 50
    },
    {
      name : 'foosar',
      addres : 'pp123',
      'age limit' : 60
    }
  ]
  constructor() {}

  ngOnInit(): void {}

}
