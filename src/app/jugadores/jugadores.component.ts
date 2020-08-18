import { Component, OnInit } from '@angular/core';
import { you } from '../jugadores/jugador';
import {  partner } from "../jugadores/jugador";
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugador1: you ={
    Turno:1, 
    Jugador1: 'tu'
  };

  jugador2: partner ={
    Turno:2, 
    Jugador2: 'Partner'
  };
 
  filas = [];
  torre = [0,0];
  constructor() { 
    for(var i=0; i<8; i++){
      this.filas[i] = [];
      for(var j=0; j<8; j++){
        if((i + j) % 2 == 0){
          this.filas[i][j]= 'posicion2';
        }else{
          this.filas[i][j]= 'posicion1';
        }
      }
    }
    


    


  }
 
  ngOnInit(): void {
  }

}
