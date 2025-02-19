import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // ✅ Aseguramos que esté en `declarations`
  ],
  imports: [
    BrowserModule,
    RouterModule // ✅ Se requiere para `router-outlet`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }