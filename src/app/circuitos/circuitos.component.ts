import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit {


  // Varibles del HTML
  piloto = "";
  circuito = "";
  coche = "";
  temporada = "";

  // Variables del TS
  circuitos:any;
  pagina = 0;
  total_circuitos = 0;
  total_pag = new Array();
  pag = false;


  constructor(private servicio:ServicioService) { }


  buscar_circuitos(){
    console.log("se ha pulsado el boton");
    this.total_pag = new Array();
    this.pagina = 0;
    this.servicio.obtenerCircuitos(this.coche, this.piloto, this.circuito, this.temporada, this.pagina).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.circuitos = data.MRData.CircuitTable.Circuits;
        this.total_circuitos = data.MRData.total;
        if (this.total_circuitos > 30){
          this.pag = true;
        }
        for (let i = 0; i < this.total_circuitos / 30; i++){
          this.total_pag.push(i+1);
        }
        console.log(this.total_pag);
        console.log(this.circuitos);
        console.log(this.total_circuitos);
      }
    );
  }

  pagina_circuitos(pagina){
    console.log("Se cambia de pagina " + pagina);
    this.servicio.obtenerCircuitos(this.coche, this.piloto, this.circuito, this.temporada, (pagina-1)*30).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.circuitos = data.MRData.CircuitTable.Circuits;

        console.log(this.circuitos);
      }
    );
  }


  ngOnInit() {
  }

}
