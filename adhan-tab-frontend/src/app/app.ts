import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('adhan-tab-frontend');
}
