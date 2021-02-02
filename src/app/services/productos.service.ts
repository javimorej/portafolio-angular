import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos:Producto[]=[];
  productosFiltrado :Producto[]=[];

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( (resolve,reject) => {
      this.http.get('https://angular--cursotemplates-default-rtdb.firebaseio.com/productos_idx.json')
            .subscribe((resp:Producto[]) => {
              this.productos=resp;

              setTimeout(() => {
                this.cargando=false;

              }, 200);
              resolve();
            });
    });
  }

   getProducto( id:string){
    const ruta="https://angular--cursotemplates-default-rtdb.firebaseio.com/productos/"+id+".json"
      return  this.http.get(ruta);
  }

  buscarProducto( termino : string){

    if(this.productos.length===0){
      this.cargarProductos().then( () => {
        //aplicar filtro
        this.filtrarProductos(termino);
      })
    }
    else{
      this.filtrarProductos(termino);

    }
  }

  private filtrarProductos( termino:string ){
    console.log(this.productos);
    this.productosFiltrado=[];

    termino=termino.toLocaleLowerCase();

    this.productos.forEach( prod => { 

      const categoriaLower=prod.categoria.toLocaleLowerCase();
      const tituloLower=prod.titulo.toLocaleLowerCase();

      if(categoriaLower.indexOf(termino) >=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    });
  }
}
