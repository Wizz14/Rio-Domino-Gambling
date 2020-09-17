import { Component } from '@angular/core';


import { Game } from './../../models/game';
// import { Player } from './../../models/game';
import { Winner } from './../../models/game';
import { Summary } from './../../models/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  game: Game;
  winnerEachRound : Winner[] = [];
  summary : Summary[] = [];
  constructor() {
    this.game = new Game();
    this.game.player = [];
    this.game.player.push({ name: "X", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Home", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Art", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Boy", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Bung", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Nook", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Yos", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Nut", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Pui", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Parn", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Kwan", isJoin: false, dualValue: { lower: 1, upper: 15 } });
    this.game.player.push({ name: "Mali", isJoin: false, dualValue: { lower: 1, upper: 15 } });
  }


  previous(): void {
    // console.log(this.game);
    this.game.step = this.game.step - 1;
  }


  next(): void {
    // console.log(this.game);
    let nextCondition = false;

    if (this.game.step == 1) {
      let r = this.game.round
      this.game.player.filter(x=>x.isJoin).forEach(function (p, index) {
        p.dualValue.lower = 1;
        p.dualValue.upper = r;
        nextCondition = true;
      });
    }else if (this.game.step == 2){
      this.winnerEachRound = [];
      for (var i = 0 ;i<this.game.round;i++){
        this.winnerEachRound.push({player : {name : null,isJoin:true,dualValue:null} , round : i+1});
      }
      nextCondition = true;
    }else if (this.game.step == 3){
      this.summary = [];
      let sum : Summary[] = [];
      let winnerEachRound = this.winnerEachRound;

      this.game.player.filter(x=>x.isJoin).forEach(function(player,index,players){
        let sumNumber = (player.dualValue.upper - player.dualValue.lower+1)*-10 ;
        let sumText = '(' + sumNumber + ')' ;
        winnerEachRound.forEach(function (winnerEachRound) {
          if ( player == winnerEachRound.player){
            let playerEachRound = players.filter(x=>
                                    x.isJoin && 
                                    x.dualValue.lower <= winnerEachRound.round && 
                                    x.dualValue.upper >= winnerEachRound.round ).length;
            sumNumber = sumNumber + (playerEachRound * 10);
            sumText = sumText + ' + (' + (playerEachRound * 10) + ')';
          }
        });
        sum.push({player : player, summaryText : sumText, summaryNumber : sumNumber});
      });
      this.summary = sum;
      nextCondition = this.winnerEachRound.filter(x=>x.player.name == null).length == 0;
    }
    if (nextCondition){
      this.game.step = this.game.step + 1;
    }
    
  }
}
