const cardinalPoints = {N: 0, E:90, S:180, W:270};
const degressToCardinal =['N', 'E', 'S', 'W'];
export class Rover{
    constructor(plateau, x, y, cardinalPoint){
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.cardinalPoint = cardinalPoints[cardinalPoint];
        this.plateau = plateau;
       
    }
    executeCommands(commands){
        for(let i = 0; i< commands.length; i++){
            this.execute(commands[i]);
        }
        console.log(this.currentPosition());
    }
    execute(command){
        if(command == 'M')
            this.move();
        else if(command == 'L')
            this.turnLeft();
        else 
            this.turnRight();
    }
    move(){
        let cardinalPoint = parseInt(this.cardinalPoint/90);
        if(!(cardinalPoint%2)){
            this.moveVertically(cardinalPoint);
            if (this.y > this.plateau.maximumY || this.y < 0){
                this.changeSideOfPlateauVertical();
            }
        }else{
            this.moveHorizontally(cardinalPoint);
            if (this.x > this.plateau.maximumX || this.x < 0){
                this.changeSideOfPlateauHorizontal();
            }
        }
    }

    changeSideOfPlateauHorizontal(){
        this.x = Math.abs(Math.abs(this.x) -6);
    }

    changeSideOfPlateauVertical(){
        this.y = Math.abs(Math.abs(this.y) -6);
    }
    
    moveVertically(cardinalPoint){
        this.y = (this.y + ((-cardinalPoint)+1));
    }

    moveHorizontally(cardinalPoint){
        this.x = ((this.x + (-cardinalPoint)+2))
    }

    turnLeft(){
        this.cardinalPoint = (this.cardinalPoint - 90 +360) % 360;
    }
    turnRight(){
        this.cardinalPoint = (this.cardinalPoint + 90) % 360;
    }

    currentPosition(){
        return `${this.x} ${this.y} ${degressToCardinal[(this.cardinalPoint/90)]}`;
    }
}