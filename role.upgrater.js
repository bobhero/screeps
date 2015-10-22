var monkey = require("monkey");
class farmer extends monkey{


    run(){
        "use strict";

        this.creep.say("uper");
        //  this.creep.moveTo(this.game.sources[0])
        if(this.creep.carry.energy <this.creep.carryCapacity){
            if(this.creep.harvest(this.game.sources[0])==ERR_NOT_IN_RANGE){
                this.creep.moveTo(this.game.sources[0])
            }
        }else {
            if(this.creep.upgradeController(this.game.controller)==ERR_NOT_IN_RANGE) {
                this.creep.moveTo(this.game.controller)
            }
        }

    }
    get body(){
        "use strict";
        return [WORK,CARRY,WORK,MOVE];
    }




}
module.exports = farmer;
