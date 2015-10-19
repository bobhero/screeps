
var run = require('run');
var factory = require('factory');
var monitor = require('monitor');
var createRole = require('createRole');
factory.init('56244616dcc66fa36b7f3c6e');
//factory.run();
console.log('outside');
Memory.reset = function(){
    Memory.factoryInit = undefined;
}
module.exports.loop = function () {
    // factory.init();
    // factory.run();
    console.log('each')
    console.log(Memory.home.room)
    monitor();
    run(Game.creeps);
    createRole.spawnNextInQue();
}