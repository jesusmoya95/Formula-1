import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {


  // Varibles del HTML
  piloto = "";
  circuito = "";
  coche = "";
  temporada = "";

  // Variables del TS
  conductores:any;
  pagina = 0;
  total_conductores = 0;
  total_pag = new Array();
  pag = false;


  constructor(private servicio:ServicioService) { }


  buscar_conductores(){
    console.log("se ha pulsado el boton");
    this.total_pag = new Array();
    this.pagina = 0;
    this.servicio.obtenerConductores(this.coche, this.piloto, this.circuito, this.temporada, this.pagina).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.conductores = data.MRData.DriverTable.Drivers;
        this.total_conductores = data.MRData.total;
        if (this.total_conductores > 30){
          this.pag = true;
        }
        for (let i = 0; i < this.total_conductores / 30; i++){
          this.total_pag.push(i+1);
        }
        console.log(this.total_pag);
        console.log(this.conductores);
        console.log(this.total_conductores);
      }
    );
  }

  pagina_conductores(pagina){
    console.log("Se cambia de pagina " + pagina);
    this.servicio.obtenerConductores(this.coche, this.piloto, this.circuito, this.temporada, (pagina-1)*30).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.conductores = data.MRData.DriverTable.Drivers;

        console.log(this.conductores);
      }
    );
  }



  ngOnInit() {
  }

}
