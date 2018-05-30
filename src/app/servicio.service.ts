import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioService {

  constructor(private ajax:HttpClient) { }

  //Metodos del servicio

  obtenerCoches(coche, piloto, circuito, temporada, pagina) :Observable<any>{
    if (piloto != ''){
      piloto = '/drivers/' + piloto;
    }
    if (circuito != ''){
      circuito = '/circuits/' + circuito;
    }
    if (temporada != ''){
      temporada = '/' + temporada;
    }
    if (coche != ''){
      coche = '/constructors/' + coche;
    }
    return this.ajax.get('http://ergast.com/api/f1' + piloto + circuito + temporada + coche + '/constructors.json?limit=30&offset=' + pagina);
  }


  obtenerTemporadas(coche, piloto, circuito, pagina) :Observable<any>{
    if (piloto != ''){
      piloto = '/drivers/' + piloto;
    }
    if (circuito != ''){
      circuito = '/circuits/' + circuito;
    }
    
    if (coche != ''){
      coche = '/constructors/' + coche;
    }
    return this.ajax.get('http://ergast.com/api/f1' + piloto + circuito + coche + '/seasons.json?limit=30&offset=' + pagina);
  }

  obtenerTemporada(temporada) :Observable<any>{
    return this.ajax.get("http://ergast.com/api/f1/" + temporada + ".json");
  }

  obtenerConductores(coche, piloto, circuito, temporada, pagina) :Observable<any>{
    if (piloto != ''){
      piloto = '/' + piloto;
    }
    if (circuito != ''){
      circuito = '/circuits/' + circuito;
    }

    if (temporada != ''){
      temporada = '/' + temporada;
    }
    
    if (coche != ''){
      coche = '/constructors/' + coche;
    }
    return this.ajax.get('http://ergast.com/api/f1' + temporada + circuito + coche + '/drivers' + piloto + '.json?limit=30&offset=' + pagina);
  }

  obtenerConductor(conductor) :Observable<any>{
    return this.ajax.get("http://ergast.com/api/f1/drivers/" + conductor + ".json");
  }

  obtenerCircuitos(coche, piloto, circuito, temporada, pagina) :Observable<any>{
    if (piloto != ''){
      piloto = '/drivers/' + piloto;
    }
    if (circuito != ''){
      circuito = '/' + circuito;
    }

    if (temporada != ''){
      temporada = '/' + temporada;
    }
    
    if (coche != ''){
      coche = '/constructors/' + coche;
    }
    return this.ajax.get('http://ergast.com/api/f1' + temporada + piloto + coche + '/circuits' + circuito + '.json?limit=30&offset=' + pagina);
  }


}
