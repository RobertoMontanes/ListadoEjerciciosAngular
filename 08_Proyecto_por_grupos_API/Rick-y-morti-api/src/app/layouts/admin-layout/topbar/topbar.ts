import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="topbar">
      <h2 class="logo">🎬 Rick and Morty</h2>
      <div class="user-section">
        <span>Admin</span>
      </div>
    </div>
  `,
  styles: [`
    .topbar {
      background: linear-gradient(135deg, #764ba2 0%, #f093fb 100%);
      color: white;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .logo {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .user-section {
      font-size: 14px;
    }
  `]
})
export class TopbarComponent { }
