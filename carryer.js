/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('carryer'); // -> 'a thing'
 */
//var charger = require("charger");
module.exports = function(creep) {
    //	var aim = Math.floor(Math.random()*2);
    var structures = creep.pos.find(FIND_MY_STRUCTURES,{filter:function(obj){
        return obj.pos.x < 12 && obj.structureType==STRUCTURE_EXTENSION && obj.energy==0;
    }});

    if (creep.carry.energy < 200) {
        var sources = creep.room.find(FIND_DROPPED_ENERGY);

        if (creep.pickup(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }


    } else {
        // creep.dropEnergy();
        // creep.say('charger')
        var target = creep.pos.findInRange(structures,30);
        if (creep.transferEnergy(target[0]) == ERR_NOT_IN_RANGE) {
            creep.say('charging')
            creep.moveTo(target[0]);
        }


    }
}