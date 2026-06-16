import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
// bootstrap(HomePageComponent);
