import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  conductor: any;

  constructor(private route: ActivatedRoute, private servicio:ServicioService) { }

  ngOnInit() {
    this.servicio.obtenerConductor(this.route.snapshot.params["conductor"]).subscribe(
      data =>{
        console.log(data);
        this.conductor = data.MRData.DriverTable.Drivers;
      }
    )
  }

}
