import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugadores/jugador';
import { ordenBlancas, ordenNegras, fichas } from './constantes';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugador1: Jugador = {
    turno: 1,
    jugador: 'tu'
  };

  jugador2: Jugador = {
    turno: 2,
    jugador: 'Partner'
  };

  fichas = fichas;
  r
  contador: number = 0;

  posicionFichas = {
    blancas: ordenBlancas,
    negras: ordenNegras
  };

  fichaSeleccionada: any;
  posicionSeleccionada: any;

  filas = [];
  tablero = [];
  torre = [0, 0];
  infoCargada: Boolean = false;
  recibidor:String;
  
  constructor() {
  }

  ngOnInit(): void {
    this.construirTabla();
    this.construirTablero();
  }

  construirTabla(): void {
    for (let i = 0; i < 8; i++) {
      this.filas[i] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          this.filas[i][j] = {
            clase: 'posicion2',
            ubicacion: {
              x: i,
              y: j
            }
          }
            ;
        } else {
          this.filas[i][j] = {
            clase: 'posicion1',
            ubicacion: {
              x: i,
              y: j
            }
          };
        }
      }
    }
  }

  construirTablero(): void {
    for (let i = 0; i < 8; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < 8; j++) {
        this.tablero[i][j] = '';
      }
    }
    this.cargarFichas();
  }

  cargarFichas(): void {
    for (let index = 0; index < 8; index++) {
      this.tablero[0][index] = this.posicionFichas.blancas.primeraLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[1][index] = this.posicionFichas.blancas.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[6][index] = this.posicionFichas.negras.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[7][index] = this.posicionFichas.negras.primeraLinea[index];
    }
    this.infoCargada = true;
  }

  buscarFicha(e): string {
    return this.tablero[e.ubicacion.x][e.ubicacion.y];
  }

  seleccionarFicha(e): void {
    var recibidor:String;
    const fichaElegida = this.fichas.find(element => element.icono === this.buscarFicha(e));
    const posicion = e;
    if (this.contador === 0) {
      this.contador = 1;
      this.fichaSeleccionada = fichaElegida;
      this.posicionSeleccionada = posicion;
    } else {
      this.contador = 0;
      this.tablero[e.ubicacion.x][e.ubicacion.y] = this.fichaSeleccionada.icono;
      this.tablero[this.posicionSeleccionada.ubicacion.x][this.posicionSeleccionada.ubicacion.y] = [];
    }
  }
  getRecibidor(){
    return this.recibidor;
  }

}
