import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { infoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio:number=new Date().getFullYear();
  constructor(public infoPaginaService:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
