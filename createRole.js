var manager = require('roleManager');
module.exports =
{
    initSpawnQue: function () {
        if (Memory.spawnQue == undefined)
            Memory.spawnQue = [];
    },

    addToQue: function (creep, unshift) {
        this.initSpawnQue();

        if (unshift != undefined && unshift === true)
            Memory.spawnQue.unshift(creep);
        else
            Memory.spawnQue.push(creep);
    },

    spawnNextInQue: function () {
        this.initSpawnQue();

        if (!Memory.spawnQue.length)
            return;



        var role = Memory.createQue[0];

        if (typeof role == "string") {
            role = {type: role, memory: {role:role}};
        }

        var bodyParts = manager.getRoleBodyParts(role.type)
        var rolebody = [];
        for(var body in bodyParts){
            if(Memory.totalSpawnEnergy >  this.spawnCost(bodyParts[body])){
                rolebody = bodyParts[body];
            }
        }

        if (Memory.home.canCreateCreep(rolebody,'',role.memory)) {
            Memory.home.createCreep(rolebody,'',role.memory);
            Memory.spawnQue.shift();
        }

    },

    spawnCost: function (parts) {

        //  var parts = manager.getRoleBodyParts(role);

        var total = 0;
        for (var index in parts) {
            var part = parts[index];
            switch (part) {
                case MOVE:
                    total += 50
                    break;

                case WORK:
                    total += 100
                    break;

                case CARRY:
                    total += 50
                    break;

                case ATTACK:
                    total += 80
                    break;

                case RANGED_ATTACK:
                    total += 150
                    break;

                case HEAL:
                    total += 250
                    break;

                case TOUGH:
                    total += 10
                    break;
            }
        }

        return total;
    },

    killAll: function (role) {
        for (var i in Game.creeps) {
            if (role == undefined || Game.creeps[i].memory.role == role)
                Game.creeps[i].suicide();
        }
    }
}