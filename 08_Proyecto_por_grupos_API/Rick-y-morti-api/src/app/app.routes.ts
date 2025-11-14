import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layouts
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TopbarComponent } from './layouts/admin-layout/topbar/topbar.component';
import { SidebarComponent } from './layouts/admin-layout/sidebar/sidebar.component';

// Pages
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { CharactersPageComponent } from './pages/characters/characters-page.component';
import { LocationsPageComponent } from './pages/locations/locations-page.component';
import { EpisodesPageComponent } from './pages/episodes/episodes-page.component';

// Shared Components
import { ButtonComponent } from './shared/components/button/button.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardPageComponent,
    CharactersPageComponent,
    LocationsPageComponent,
    EpisodesPageComponent,
    ButtonComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }