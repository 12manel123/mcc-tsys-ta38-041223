import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AltaClienteComponent } from "./alta-cliente/alta-cliente.component";
import { ListadoClientesComponent } from "./listado-clientes/listado-clientes.component";

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AltaClienteComponent,ListadoClientesComponent]
})
export class AppComponent {

}
