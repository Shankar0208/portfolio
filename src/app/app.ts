import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
