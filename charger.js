/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('carryer'); // -> 'a thing'
 */
//var ba = require("role.blancer");
module.exports = function(creep) {
    //  return ba(creep)
    //	var aim = Math.floor(Math.random()*2);
    //  var center = creep.pos.findClosestByRange(FIND_MY_STRUCTURES,{filter:function(o){return 1 && o.structureType==STRUCTURE_STORAGE}});
    var center = Game.getObjectById('5623463d6b2c393b0ad2998c');
    var exts = creep.room.find(FIND_MY_STRUCTURES,{filter:function(obj){
        return obj.structureType==STRUCTURE_EXTENSION && obj.energy<50;
    }});
    // creep.say(exts.length)
//creep.carryCapacity
    creep.say('charger')
    if (creep.carry.energy <  creep.carryCapacity *0.5 ) {
        var sources = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        //  creep.say('picking')
        if (creep.pickup(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources);
        }
    } else {
        if(false ){
            creep.say('goto home')
            var target = Game.spawns.BHOME;
        }else {
            //     creep.say("goto ext")
            //  var emptyexts = creep.pos.findClosestByRange(exts);
            // console.log(emptyexts)
            {

                target = center
                creep.say(center)
            }
        }
        if (creep.transferEnergy(target) == ERR_NOT_IN_RANGE) {
            //    creep.say('charging')
            creep.moveTo(target);
        }


    }
}