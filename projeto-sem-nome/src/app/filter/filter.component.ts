import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  gender: string;
  race: string;
  schooling: string;

  filter: {[k: string]: any} = {};

  constructor() { }

  ngOnInit() {
  }

  setGender(gender: string) {
    this.gender = gender;    
    this.emitFilter();
    
  }

  setRace(race: string) {
    this.race = race;
    this.emitFilter();
  }

<<<<<<< HEAD
  emitFilter() {
    console.log(this.gender, this.race)
    this.filterChange.emit(
      {Genero: this.gender,
      Cor_Raca: this.race}
    ); 
=======
  setSchooling(schooling: string) {
    this.schooling = schooling;
    this.emitFilter();
  }

  emitFilter() {    
    this.filterChange.emit({
      Genero: this.gender,
      Cor_Raca: this.race,
      Grau_Instrucao: this.schooling
    }); 
>>>>>>> 1290cfc5eb0a86d195f338fc9194a4bdf97e25b8
  }
}
