const cardinalPoints = {N: 0, E:90, S:180, W:270}
const degressToCardinal =['N', 'E', 'S', 'W'];
export class Rover{
    constructor(plateau, x, y, cardinalPoint){
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.cardinalPoint = cardinalPoints[cardinalPoint],
        this.plateau = plateau
       
    }
    executeCommands(commands){
        for(let i = 0; i< commands.length; i++){
            this.execute(commands[i]);
        }
        console.log(this.currentPosition())
    }
    execute(command){
        if(command == 'M')
            this.moveForward();
        else if(command == 'L')
            this.turnLeft()
        else 
            this.turnRight();
    }
    moveForward(){
        let cardinalPoint = parseInt(this.cardinalPoint/90);
        if(!(cardinalPoint%2)){
            this.y = (this.y + ((-cardinalPoint)+1) + this.plateau.maximumY) % this.plateau.maximumY;
        }else{
            this.x = ((this.x + (-cardinalPoint)+2) + this.plateau.maximumX) % this.plateau.maximumX;;
        }
    }

    turnLeft(){
        this.cardinalPoint = (this.cardinalPoint - 90 +360) % 360
    }
    turnRight(){
        this.cardinalPoint = (this.cardinalPoint + 90) % 360
    }

    currentPosition(){
        return `${this.x} ${this.y} ${degressToCardinal[(this.cardinalPoint/90)]}`
    }
}