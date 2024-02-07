import { Component, OnInit } from '@angular/core';
import { CLiente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit {

  //propiedad
  clientes:CLiente[]=[];

  //constructor
  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }
}
