var monkey = require("monkey");
class farmer extends monkey{


    run(){
        "use strict";

        this.creep.say(this.game.totalSpawnEnergy);
      //  this.creep.moveTo(this.game.sources[0])
        if(this.creep.carry.energy <this.creep.carryCapacity){
        if(this.creep.harvest(this.game.sources[0])==ERR_NOT_IN_RANGE){
            this.creep.moveTo(this.game.sources[0])
        }
        }else {
            if(this.creep.transferEnergy(this.game.home)==ERR_NOT_IN_RANGE) {
                this.creep.moveTo(this.game.home)
            }
        }

    }
    get body(){
        "use strict";
        return [WORK,CARRY,MOVE];
    }




}
module.exports = farmer;
