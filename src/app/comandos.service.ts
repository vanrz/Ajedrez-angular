import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'text/html',
      'Accept': 'text/html',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  }),
  responseType: 'text'
};

@Injectable({
  providedIn: 'root'
})
export class ComandosService {

  url = "http://localhost8080:ServletPrueba/ServicioAjedrez";

  constructor(private http: HttpClient) { }

  respuestaLlamdoServlet(comando: string){
    var params = new HttpParams();
    params.append("comando", comando);
    const options = {
      params, httpOptions
    }
    return this.http.post<string>(this.url+'?comando='+comando, options);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError({
      status: error.status,
      message: 'Something bad happened; please try again later.',
    });
  }
}