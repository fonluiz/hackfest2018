import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesService } from './services/candidates.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
