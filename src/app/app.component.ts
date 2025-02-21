import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ⬅️ Aseguramos que sea standalone
  imports: [NavbarComponent, RouterOutlet], // ⬅️ Importamos correctamente el Navbar y el RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
