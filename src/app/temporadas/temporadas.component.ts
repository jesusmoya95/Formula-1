import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {


  // Varibles del HTML
  piloto = "";
  circuito = "";
  coche = "";

  // Variables del TS
  temporadas:any;
  pagina = 0;
  total_temporadas = 0;
  total_pag = new Array();
  pag = false;

  constructor(private servicio:ServicioService) { }

  buscar_temporada(){
    console.log("se ha pulsado el boton");
    this.total_pag = new Array();
    this.pagina = 0;
    this.servicio.obtenerTemporadas(this.coche, this.piloto, this.circuito, this.pagina).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.temporadas = data.MRData.SeasonTable.Seasons;
        this.total_temporadas = data.MRData.total;
        if (this.total_temporadas > 30){
          this.pag = true;
        }
        for (let i = 0; i < this.total_temporadas / 30; i++){
          this.total_pag.push(i+1);
        }
        console.log(this.total_pag);
        
        
        console.log(this.temporadas);
        console.log(this.total_temporadas);
      }
    );
    
  }

  pagina_temporadas(pagina){
    console.log("Se cambia de pagina " + pagina);
    this.servicio.obtenerTemporadas(this.coche, this.piloto, this.circuito, (pagina-1)*30).subscribe(
      data => {
        //Lee el resultado de los datos del servicio.
        console.log(data);
        this.temporadas = data.MRData.SeasonTable.Seasons;

        console.log(this.temporadas);
      }
    );
  }



  ngOnInit() {
  }

}
