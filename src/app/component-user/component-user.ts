import { Component, OnInit, signal, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user'; // Asegúrate de que esta ruta sea correcta
import { UserRequest } from '../models/userRequest'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-component-user',
  standalone: true, // 👈 esta línea es importante
  imports: [CommonModule,FormsModule],
  templateUrl: './component-user.html',
  styleUrl: './component-user.css'
})
export class ComponentUser implements OnInit {
   users = signal<any[]>([]);

    usuario: any = {
    name: '',
    email: '',
    password: ''
  };
  
userReq: any = {
  email: '',
  name: '',
  password: '',
  phones: [
    {
      citycode: '',
      contrycode: '', // corregir a "countrycode" si tu API lo pide así
      number: ''
    }
  ]
};
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers();
    this.users = this.userService.users;
  }

  eliminarUsuario(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
    //  this.limpiarFormulario();
        this.userService.fetchUsers();
    });
  }

  mostrarUsuarios() {
    this.userService.fetchUsers();
  }

  guardarUsuario(userRequest: UserRequest) {
   
      this.userService.createUser(userRequest).subscribe(() => {
        //this.limpiarFormulario();
        this.userService.fetchUsers();
      });
    
  }

  editar(userRequest: any) {
    this.userReq = { ...userRequest };
  }
updateUsuario(id: number, userRequest: UserRequest) {
   
      this.userService.updateUser(id,userRequest).subscribe(() => {
      
        this.userService.fetchUsers();
      });
/*/
 limpiarFormulario() {
    this.usuario = {
      name: '',
      email: '',
      password: ''
    };/*/
  }
    
 
}
