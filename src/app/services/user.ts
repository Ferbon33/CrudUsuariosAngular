import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'; // Asegurate de tener esta interfaz
import { UserRequest  } from '../models/userRequest'; // Asegurate de tener esta interfaz

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';
  
  // Signal que expone la lista de usuarios
  users = signal<User[]>([]);

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  fetchUsers(): void {
    this.http.get<User[]>(`${this.baseUrl}/getAllUser`).subscribe(data => {
      this.users.set(data);
    });
  }

  // Obtener un usuario por ID
  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/getUserById/${id}`);
  }

  // Crear usuario
  createUser(userRequest: UserRequest) {
    return this.http.post(`${this.baseUrl}/saveUser`, userRequest);
  }

  // Actualizar usuario
  updateUser(id: number, userRequest: UserRequest) {
    return this.http.put(`${this.baseUrl}/UpdateUserById/${id}`, userRequest);
  }

  // Eliminar usuario
  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/DeleteUserById/${id}`);
  }
}
