import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { ComponentUser } from './component-user/component-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentUser],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mi-app');
}
