import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styles: ``


})
export class AppComponent {
  title = 'ngfast-web';

  constructor() {
    console.log('AppComponent');
  }
}
