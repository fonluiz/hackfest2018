import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesService } from './services/candidates.service'
import { TitleCasePipe } from './pipes/title-case'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    CandidatesListComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule
  ],
  exports: [TitleCasePipe],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
