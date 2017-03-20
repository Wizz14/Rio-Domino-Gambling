export class Game {
    step : number = 1;
    round : number = 3;
    player : Player[];
}

export class Player {
    name : string ;
    isJoin : boolean;
    dualValue : any;
}

export class Winner {
    round : number;
    player : Player;
}

export class Summary {
    player : Player;
    summaryText : string;
    summaryNumber : number;

}