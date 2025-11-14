import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">
          📊 Dashboard
        </a>
        <a routerLink="/characters" routerLinkActive="active" class="nav-link">
          👤 Personajes
        </a>
        <a routerLink="/locations" routerLinkActive="active" class="nav-link">
          🌍 Ubicaciones
        </a>
        <a routerLink="/episodes" routerLinkActive="active" class="nav-link">
          📺 Episodios
        </a>
      </nav>
    </div>
  `,
  styles: [`
    .sidebar {
      background-color: #f5f5f5;
      width: 250px;
      min-height: 100vh;
      padding: 20px 0;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      padding: 15px 20px;
      text-decoration: none;
      color: #333;
      border-left: 4px solid transparent;
      transition: all 0.3s ease;
      display: block;
    }

    .nav-link:hover {
      background-color: #e0e0e0;
      border-left-color: #764ba2;
    }

    .nav-link.active {
      background-color: #764ba2;
      color: white;
      border-left-color: #764ba2;
    }
  `]
})
export class SidebarComponent { }