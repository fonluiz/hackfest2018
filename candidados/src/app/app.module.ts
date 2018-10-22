import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FiltraCandidatosComponent } from './filtra-candidatos/filtra-candidatos.component';
import { CandidatesListComponent } from './lista-candidatos/lista-candidatos.component';
import { CandidatesService } from './services/candidates.service';
import { TitleCasePipe } from './pipes/title-case';
import { FilterCandidatesPipe } from './pipes/filter-candidates';
import { AppRoutingModule } from './app-routing.module';
import { PerfilCandidatoComponent } from './perfil-candidato/perfil-candidato.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import { EvolucaoPatrimonioComponent } from './evolucao-patrimonio/evolucao-patrimonio.component';
import { EvolucaoCargoComponent } from './evolucao-cargo/evolucao-cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltraCandidatosComponent,
    CandidatesListComponent,
    TitleCasePipe,
    EvolucaoPatrimonioComponent,
    EvolucaoCargoComponent,
    FilterCandidatesPipe,
    PerfilCandidatoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    CommonModule,
    PlotlyModule,
    AppRoutingModule
  ],
  exports: [TitleCasePipe, FilterCandidatesPipe],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
