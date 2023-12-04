import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})

export class AltaClienteComponent {
  favoriteFramework: string = '';
  countries = ['Seleccionar país', 'España', 'Argentina', 'México', 'Otro'];
  
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cif: new FormControl('', Validators.required),
    dire: new FormControl('', Validators.required),
    pais: new FormControl('Seleccionar país', Validators.required),
  });

  sendForm(): void {
    console.log(this.favoriteFramework);
  }
  constructor(private clienteService: ClienteService) {}

  handleContactFormSubmit(): void {
    const nuevoCliente = this.contactForm.value;
    this.clienteService.agregarCliente(nuevoCliente);
    console.log(nuevoCliente);
  }
}