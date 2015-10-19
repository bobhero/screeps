/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('farmer'); // -> 'a thing'
 */
var charger=require('charger')
var balancer = require("role.blancer")
module.exports = function (creep) {

    var structures = creep.pos.findClosestByRange(FIND_MY_STRUCTURES,{filter:function(obj){
        return obj.structureType==STRUCTURE_EXTENSION && obj.energy==0;
    }});

    if(creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);

        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }

    }
    else {

        if(creep.transferEnergy(Game.spawns.BHOME)==ERR_NOT_IN_RANGE){
            return creep.moveTo(Game.spawns.BHOME)
        }

    }
}