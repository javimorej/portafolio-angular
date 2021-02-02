import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root',
})

export class InfoPaginaService {

  info:infoPagina;
  cargada:boolean=false;
  equipo:any[]=[];

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //leyendo Json:
    this.http.get('assets/data/data-pagina.json')

    .subscribe( (resp: infoPagina)=> {
      this.cargada=true;
      this.info=resp;
    });
  }

  private cargarEquipo(){
    //leyendo Json:
    this.http.get('https://angular--cursotemplates-default-rtdb.firebaseio.com/Equipo.json')

    .subscribe( (resp:any[])=> {
      this.equipo=resp;
    });
  }
}
