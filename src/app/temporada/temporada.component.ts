import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  temporada: any;

  constructor(private route: ActivatedRoute, private servicio:ServicioService) { }

  ngOnInit() {
    this.servicio.obtenerTemporada(this.route.snapshot.params["temporada"]).subscribe(
      data =>{
        console.log(data);
        this.temporada = data.MRData.RaceTable.Races;
      }
    )
  }

}
