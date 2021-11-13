import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Improvement } from '../../core/models/improvement.model';

@Injectable({
  providedIn: 'root'
})
export class GamedataService {

  private REST_API_SERVER = "http://localhost:3000";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get all game data
  getGameData(): Observable<any> {
    return this.httpClient.get(`${this.REST_API_SERVER}/gamedata`).pipe(

    );
  }

  getImprovements(): Observable<any> {
    return this.httpClient.get(`${this.REST_API_SERVER}/improvements`).pipe(

    );
  }

  public updatePepper(value: any) {
    this.httpClient.put(`${this.REST_API_SERVER}/gamedata`, '{"pepper": 10 }', {headers: this.headers}).subscribe(data => {
      console.log(data);
    });
  }

  public updateImprovement(improvement: Improvement) {
    this.httpClient.put(`${this.REST_API_SERVER}/gamedata`, improvement, {headers: this.headers}).subscribe(data => {
      console.log(data);
    });
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
