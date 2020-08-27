import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    ComunicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

