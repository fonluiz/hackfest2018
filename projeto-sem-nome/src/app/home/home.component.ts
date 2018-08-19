import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter: any;

  constructor() { }

  ngOnInit() {
  }

  private changeFilter(filter) {
    this.filter = filter;
    console.log(this.filter)
  }

}
