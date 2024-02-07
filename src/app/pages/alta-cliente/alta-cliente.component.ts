import { Component, OnInit } from '@angular/core';
import { CLiente } from '../../models/cliente';
import { tipoCliente } from '../../models/tipo_cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit {

  //propiedades
  cliente!:CLiente;
  tipos: tipoCliente[] = [];

  //constructor
  constructor(private clienteService:ClienteService){  }

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.tipos = this.clienteService.getTipos();
  }


  //método para insertar un cliente desd el formulario
  insertarCliente(){
    this.clienteService.agrgarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}
