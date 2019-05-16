import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorseRacesService {
  totalSeconds = 0;
  currentTime = 0;
  raceHorces = [];
  horses = [
    {
      "speed": 8,
      "endurance": 400,
      "speedShortage": 2
    },
    {
      "speed": 10,
      "endurance": 500,
      "speedShortage": 3
    },
    {
      "speed": 13,
      "endurance": 800,
      "speedShortage": 4
    }
  ]
  //service used to return  object that will be appended in array (with max length 3) to be rendered
  //horses is array and will return the time for the current race and position of each horse and
  // distance covered ?????
  constructor(horses) { 
    
    //will loop over them and call make race
  }
  makeRace() {
   this.horses.forEach(element => {
     
   });
  }

  startRace(){
    var interval = setInterval(() => {
      ++this.totalSeconds;
    }, 1000);
  }
}
