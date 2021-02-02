import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { infoPagina } from '../../interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService:InfoPaginaService,private router:Router) {

   }

  ngOnInit(): void {
  }

  buscarProducto( termino:String ){

    if(termino.length<1){
      return;
    }
    this.router.navigate(['/search',termino]);
  }

}
