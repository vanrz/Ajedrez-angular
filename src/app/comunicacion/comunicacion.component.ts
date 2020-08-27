import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandosService } from '../comandos.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css'],
  providers: [ComandosService]
})
export class ComunicacionComponent implements OnInit {

 
  resultado = "";

  constructor(private http: ComandosService) { }

comando:"";
recibidor;
  enviarComando(){
    let recibidor:String =document.getElementById("mov").innerHTML;
    this.recibidor=recibidor;
    
    this.http.respuestaLlamdoServlet(this.recibidor).subscribe((data:any)=>{
      this.resultado = data.recibidor;
     
      //jeje
    });
    //alert("ya");
  }

  ngOnInit() {
  }

}
