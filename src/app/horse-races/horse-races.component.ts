import { Component, OnInit } from '@angular/core';
import { HorseRaceService } from '../services/horse-race.service';

@Component({
  selector: 'app-horse-races',
  templateUrl: './horse-races.component.html',
  styleUrls: ['./horse-races.component.css']
})
export class HorseRacesComponent implements OnInit {

  
  // each time create new race will be appended to this list
  //will add new property called time for each object 
  horseRaces;
  racesResults;
  bestResultEver;
  buttonDisabled;
  horseRacesCount;
 
    
  constructor(private horseRaceService : HorseRaceService) { 
    this.horseRacesCount = 0
   this.horseRaceService = horseRaceService;
  
         
  }

  ngOnInit() {
    //run first when page load
    this.getHorseRaces()
    this.getHorseRacesResults()
    
     //run repeatedly every 2 seconds
    var interval = setInterval(() => {
      this.getHorseRaces()
    }, 2000);

    //run repeatedly every 60 seconds
    var interval = setInterval(() => {
      this.getHorseRacesResults()
    }, 60000);
  }
  getHorseRaces(){
    this.horseRaceService.getHorseRaces().then(response=>{
      this.horseRaces = response;
      this.horseRacesCount = this.horseRaces.length
      
    }, (err) => {
      console.log(err);
    });
  }
  getHorseRacesResults(){
    this.horseRaceService.getHorseRacesResults().then(response=>{
      this.racesResults = response["bestResultsForLastFiveRaces"];
      this.bestResultEver = response["bestResultEver"];
    }, (err) => {
      console.log(err);
    });
  }

  createRace() {
    if (this.horseRaces.length < 3 ){
      this.horseRaceService.createHorseRace().then(response=>{
        console.log("race created");
      }, (err) => {
        console.log(err);
      });
    }
    
  }

  advanceRaces() {
    this.horseRaceService.advanceHorseRaces().then(response=>{
      console.log("races advanced");
    }, (err) => {
      console.log(err);
    });
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
