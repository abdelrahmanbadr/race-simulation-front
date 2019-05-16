import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horse-races',
  templateUrl: './horse-races.component.html',
  styleUrls: ['./horse-races.component.css']
})
export class HorseRacesComponent implements OnInit {
  totalSeconds = 0;
  // each time create new race will be appended to this list
  //will add new property called time for each object 
  horseRaces = [
    {
      "distance": 1500,
      "time":0,
      "horses": [
        {
          "speed": 8,
          "endurance": 400,
          "speedShortage": 2,
          "distanceCovered":0//finish at 233.3 seconds
        },
        {
          "speed": 10,
          "endurance": 500,
          "speedShortage": 3,
          "distanceCovered":0
        },
        {
          "speed": 13,
          "endurance": 800,
          "speedShortage": 4,
          "distanceCovered":0
        }
      ]
    }
  ]
  
  

  constructor() { 
  
  
    this.countUpHorsesDistanceCovered()
  }

  ngOnInit() {
    
  }

  createRace() {
    //will fetch new object and append it to horse races
    // then get it's index in the array and pass it to 
  }

   countUpHorsesDistanceCovered(){
     //each race should have it's own interval
    var interval = setInterval(() => {
      ++this.horseRaces[0].time;
      
      this.horseRaces.forEach(race => {
        race.horses.forEach(horse => {
          if (horse.distanceCovered <= race.distance) {
            if (horse.distanceCovered >= horse.endurance) {
              horse.distanceCovered += horse.speed - horse.speedShortage
            }else{
              horse.distanceCovered += horse.speed
            }
          }
          
        });
      });
    }, 1000);
  };
 
  clearTimer(){
   // clearInterval(interval);
  }

  //advance all races with 10 seconds
  progress(){
    this.totalSeconds += 10
  }

  

}
