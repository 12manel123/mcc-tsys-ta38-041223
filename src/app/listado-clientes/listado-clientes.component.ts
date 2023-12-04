import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  clientes: Partial<{ name: string | null; cif: string | null; dire: string | null; pais: string | null; }>[] = [];
  constructor(private clienteService: ClienteService) {
    this.clientes = clienteService.obtenerClientes();
  }
}
