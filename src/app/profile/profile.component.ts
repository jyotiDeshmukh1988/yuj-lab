import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yuj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() personName!: string;
  @Input() addressDetails!: Array<string>;
  @Input() productConfigs!: any;
  @Output() logindetails = new EventEmitter();
  profileUrl = './../../assets/images/product.jpeg';
  constructor() {}

  ngOnInit(): void {
    this.logindetails.emit('Helo coming from the profile comopent');
  }
}
