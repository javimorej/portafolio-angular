import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto:productoDescripcion;
  id:string;

  constructor(private route:ActivatedRoute ,private productosService:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {

      this.productosService.getProducto(parametros['id'])
        .subscribe( (producto : productoDescripcion) => {
          console.log(producto);
          this.producto=producto;
          this.id=parametros['id'];
        });
    });
  }

}
