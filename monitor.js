module.exports = function(){


    Memory.totalSpawnEnergy = Memory.home.energy ;

    Memory.exts = Game.home.room.find(
        FIND_MY_STRUCTURES,
        {filter:function(obj){
            return  obj.structureType == STRUCTURE_EXTENSION
        }}
    );

    for(var e in exts){
        Memory.totalSpawnEnergy = Memory.totalSpawnEnergy + exts[e].energy;
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
            if(neededToSkip > countType(type, true))
            {
                Memory.createQue.push(type);
            }

            gatheredScreeps[type]++;
        }


}