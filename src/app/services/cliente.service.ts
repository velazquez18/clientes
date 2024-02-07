import { Injectable } from '@angular/core';
import { CLiente } from '../models/cliente';
import { tipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:CLiente[] = [];
  private tipos:tipoCliente[] = [];

  constructor() { 
    this.clientes = [];

    this.tipos = [
      {
        id:0,
        descripcion: 'sin definir'
      },
      {
        id: 1,
        descripcion: 'Clientes Activoss'
      },
      {
        id: 2,
        descripcion: 'Clientes inactivos'
      },
      {
        id: 3,
        descripcion: 'Clientes Deudores'
      }
    ];
  }

  //metodo que retorna el arreglo de clientes

  getClientes() {
    return this.clientes;
  }

  // método que retorne los tipos de cliente
  getTipos(){
    return this.tipos;
  }

  //método para agregar clientes al arreglo
  agrgarCliente(cliente:CLiente){
    this.clientes.push(cliente);
  }

  //método que inicializa un cliente nuevo
  nuevoCliente():CLiente {
    return{
      id: this.clientes.length + 1,
      nombre: '',
      rfc: '',
      domicilio: '',
      tipoCliente: 0
    };
  }

}
