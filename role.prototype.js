var proto = {
    /**
     * The creep for this role
     *
     * @type creep
     */
    creep: null,

    /**
     * Set the creep for this role
     *
     * @param {Creep} creep
     */
    setCreep: function(creep)
    {
        this.creep = creep;
        return this;
    },

    run: function()
    {
        if(this.creep.memory.onSpawned == undefined) {
            this.onSpawn();
            this.creep.memory.onSpawned = true;
        }

        this.action(this.creep);

        if(this.creep.ticksToLive == 1)
            this.beforeAge();
    },

    handleEvents: function()
    {
        if(this.creep.memory.onSpawned == undefined) {
            this.onSpawnStart();
            this.onSpawn();
            this.creep.memory.onSpawned = true;
        }

        if(this.creep.memory.onSpawnEnd == undefined && !this.creep.spawning) {
            this.onSpawnEnd();
            this.creep.memory.onSpawnEnd = true;
        }
    },

    getParts: function() {
        var _ = require('lodash');

        var extensions = Game.getRoom('1-1').find(Game.MY_STRUCTURES, {
            filter: function(structure)
            {
                return (structure.structureType == Game.STRUCTURE_EXTENSION && structure.energy >= 200);
            }
        }).length;

        var parts = _.cloneDeep(this.parts);
        if(typeof parts[0] != "object")
            return this.parts;

        parts.reverse();

        for(var i in parts)
        {
            if((parts[i].length - 5) <= extensions) {
                return parts[i];
            }
        }
    },

    action: function() { },

    onSpawn: function() { },

    onSpawnStart: function() { },

    onSpawnEnd: function() { },

    beforeAge: function() { },

    /**
     * All credit goes to Djinni
     * @url https://bitbucket.org/Djinni/screeps/
     */
    rangedAttack: function(target) {
        var creep = this.creep;

        if(!target)
            target = creep.pos.findNearest(Game.HOSTILE_CREEPS);

        if(target) {
            if (target.pos.inRangeTo(creep.pos, 3) ) {
                creep.rangedAttack(target);
                return target;
            }
        }
        return null;
    },

    keepAwayFromEnemies: function()
    {
        var creep = this.creep;

        var target = creep.pos.findNearest(Game.HOSTILE_CREEPS);
        if(target !== null && target.pos.inRangeTo(creep.pos, 3))
            creep.moveTo(creep.pos.x + creep.pos.x - target.pos.x, creep.pos.y + creep.pos.y - target.pos.y );
    }

};

module.exports = proto;