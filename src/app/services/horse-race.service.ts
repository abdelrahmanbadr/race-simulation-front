import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorseRaceService {

  protected apiUrl;
  protected raceUrl;
  protected advanceRacesUrl;
  protected raceResultsUrl;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl ;
     //@todo move it to constants
    this.raceUrl = 'horse-races'
    this.raceResultsUrl = this.raceUrl+'/results'
    this.advanceRacesUrl = this.raceUrl + '/advance'
   }

   getHorseRaces() {
    return new Promise((resolve, reject) => {
     
      this.http.get(this.apiUrl + this.raceUrl )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getHorseRacesResults() {
    return new Promise((resolve, reject) => {
     
      this.http.get(this.apiUrl + this.raceResultsUrl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  createHorseRace() {
    return new Promise((resolve, reject) => {
    
      this.http.post(this.apiUrl + this.raceUrl ,[])
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  advanceHorseRaces() {
    return new Promise((resolve, reject) => {
     
      this.http.post(this.apiUrl + this.advanceRacesUrl ,[])
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

 


  
}
