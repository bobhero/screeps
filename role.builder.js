module.exports = {
    parts: [
        [MOVE,WORK,WORK,CARRY],
        [MOVE,WORK,WORK,WORK,WORK,CARRY],
    ],


    setSource:function(){

    },
    setAim:function(){

    },
    setPos:function(x,y,room){

    },
    action: function () {
        var creep = this.creep;

        if(creep.carry.energy < creep.carryCapacity) {
            var target =creep.pos.findClosestByRange(Memory.source);
            if(creep.harvest(target)==ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else {
            var target = Memory.home;

            if(creep.transferEnergy(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
            if(creep.transferEnergy(target) == ERR_FULL) {
                creep.dropEnergy();
            }

            //creep.transferEnergy(target);
        }
    }
}