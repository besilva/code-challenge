import { inputText } from './helpers/readLine-helper.js';
import { Plateau } from './models/Plateau.js'
import { Rover } from './models/Rover.js'
const init =  async() => {
    try{
        const tam = await inputText("Plateau size: ");
        const plateau = new Plateau(...tam.split(' '));
        plateau.showSize();
        let positon = '', commands;
        while(positon != 'quit'){        
            console.log("If you want to exit type quit");
            positon = await inputText("Where should the rover be deployed? ");
            if( positon == 'quit' )
                process.exit(-1);
            let rover = new Rover(plateau, ...positon.split(' '));
            commands = await inputText("What should the rover do? ");
            rover.executeCommands(commands);
        }
        console.log(positon);
    }catch(e){
        console.log(e);
      
    }
}
init();