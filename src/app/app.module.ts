import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { ConductorComponent } from './conductor/conductor.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { CochesComponent } from './coches/coches.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TemporadasComponent } from './temporadas/temporadas.component';
import { TemporadaComponent } from './temporada/temporada.component';


/* Servicie */
import { ServicioService } from "./servicio.service";

/* Forms Module */
import { FormsModule } from '@angular/forms';

/* HTTP client */
import {HttpClientModule} from '@angular/common/http';

/* Routes */
import { RouterModule, Routes } from '@angular/router';





const appRoutes: Routes = [
  {path: '', component: BusquedaComponent},
  {path: 'drivers', component: ConductoresComponent},
  {path: 'circuitos', component: CircuitosComponent},
  {path: 'temporadas', component: TemporadasComponent},
  {path: 'temporadas/:temporada', component: TemporadaComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'circuitos/:idcircuito', component: CircuitoComponent},
  {path: 'drivers/:conductor', component: ConductorComponent},
  {path: '*', component: BusquedaComponent}
]





@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ConductoresComponent,
    ConductorComponent,
    CircuitosComponent,
    CircuitoComponent,
    CochesComponent,
    BusquedaComponent,
    TemporadasComponent,
    TemporadaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
