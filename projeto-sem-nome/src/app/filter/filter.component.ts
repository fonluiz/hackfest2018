import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  gender: string;

  constructor() { }

  ngOnInit() {
  }

  setGender(gender: string) {
    this.gender = gender;
    this.filterChange.emit({Genero: this.gender})
  }
}
