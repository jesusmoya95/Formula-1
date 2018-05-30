import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  // Varibles del HTML
  piloto = "";
  circuito = "";
  coche = "";
  temporada = "";

  // Variables del TS
  coches:any;
  pagina = 0;
  total_coches = 0;
  total_pag = new Array();
  pag = false;

  constructor(private servicio:ServicioService) { }

  buscar_coche(){
    console.log("se ha pulsado el boton");
    this.servicio.obtenerCoches(this.coche, this.piloto, this.circuito, this.temporada, this.pagina).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.coches = data.MRData.ConstructorTable.Constructors;
        this.total_coches = data.MRData.total;
        if (this.total_coches > 30){
          this.pag = true;
        }
        for (let i = 0; i < this.total_coches / 30; i++){
          this.total_pag.push(i+1);
        }
        console.log(this.total_pag);
        
        
        console.log(this.coches);
        console.log(this.total_coches);
      }
    );
    
  }


  pagina_coches(pagina){
    console.log("Se cambia de pagina" + pagina);
    this.servicio.obtenerCoches(this.coche, this.piloto, this.circuito, this.temporada, (pagina-1)*30).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.coches = data.MRData.ConstructorTable.Constructors;

        console.log(this.coches);
      }
    );
  }

  ngOnInit() {
  }

}
