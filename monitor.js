var countRole = require("countRole");
module.exports = function(){


    Memory.totalSpawnEnergy = Memory.home.energy ;

    Memory.exts = Memory.home.room.find(
        FIND_MY_STRUCTURES,
        {filter:function(obj){
            return  obj.structureType == STRUCTURE_EXTENSION
        }}
    );

    for(var e in Memory.exts){
        Memory.totalSpawnEnergy = Memory.totalSpawnEnergy + Memory.exts[e].energy;
    }


    var requiredScreeps = Memory.requireCreeps;

    var gatheredScreeps = { };
    for(var index in requiredScreeps)
    {
        var type = requiredScreeps[index];
        if(gatheredScreeps[type] == undefined)
            gatheredScreeps[type] = 0;

        var neededToSkip = gatheredScreeps[type] + 1;

        var found = countRole(type, true);
        if(neededToSkip > countRole(type, true) && Memory.createQue.length==0)
        {
            Memory.createQue.push(type);
        }

        gatheredScreeps[type]++;
    }


}