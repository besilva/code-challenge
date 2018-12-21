export class Plateau{
    constructor(x, y){
        if(!(x && y))
            throw Error('Missing param probable cause bad input')
        this.maximumX = parseInt(x);
        this.maximumY = parseInt(y);
    }
    showSize(){
        console.log(`The plateau size is x: ${this.maximumX} and y: ${this.maximumY}`)
    }
}