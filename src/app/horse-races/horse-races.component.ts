import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horse-races',
  templateUrl: './horse-races.component.html',
  styleUrls: ['./horse-races.component.css']
})
export class HorseRacesComponent implements OnInit {

  
  // each time create new race will be appended to this list
  //will add new property called time for each object 
  horseRaces = []
    
  constructor() { 
  
  }

  ngOnInit() {
    
  }

  createRace() {
      //will fetch new object and append it to horse races
    // then get it's index in the array and pass it to  countUpHorsesDistanceCovered()
    // this reponse should be mapped to match this form from mapper service
    var object = {
      "distance": 100,
      "time":0,
      "finished":false,
      "horses": [
        {
          "speed": 8,
          "endurance": 400,
          "speedShortage": 2,
          "distanceCovered":0
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
    this.horseRaces.push(object)
    this.countUpHorsesDistanceCovered(this.horseRaces.length-1)
  
  }

   countUpHorsesDistanceCovered(index){
     //each race should have it's own interval
    var interval = setInterval(() => {
     var finishedHorses = []
      ++this.horseRaces[index].time;
      var race = this.horseRaces[index]
      
        race.horses.forEach((horse,index) => {

          if (horse.distanceCovered <= race.distance) {
            if (horse.distanceCovered >= horse.endurance) {
              horse.distanceCovered += horse.speed - horse.speedShortage
            }else{
              horse.distanceCovered += horse.speed
            }
            if (horse.distanceCovered >= race.distance){
              horse.distanceCovered = race.distance
              finishedHorses[index] = true
             
            }
          }
          if (finishedHorses.filter(Boolean).length == race.horses.length) {
            race.finished = true
            clearInterval(interval);
          }
      });
    }, 1000);
  };
 
  clearTimer(){
   // 
  }

  //advance all races with 10 seconds
  progress(){
   
  }

  

  

}
