
class GameInfo{



    get home(){
        "use strict";
        return Game.getObjectById(Memory.spawnId);
    }
    get totalSpawnEnergy(){
        return Game.spawns.BHOME.energy;

    }
    get controller(){
        "use strict";
        return Game.getObjectById(Memory.controllerId);
    }
    get sources(){
        "use strict";
        console.log(Game.getObjectById(Memory.spawnId).room.find(FIND_SOURCES_ACTIVE));
        return Game.getObjectById(Memory.spawnId).room.find(FIND_SOURCES_ACTIVE)
    }


    get eCenter(){
        "use strict";

    }
    get source(){
        "use strict";
        var creeps = [];
        for(var i in Game.s){
            var creep  = Game.creeps[i];
            creeps.push(creep);
        }
        return creeps;
    }
}

module.exports = GameInfo;