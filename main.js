
var run = require('run');
var factory = require('factory');
var monitor = require('monitor');
var createRole = require('createRole');
factory.init('56244616dcc66fa36b7f3c6e');
//factory.run();

Memory.reset = function(){
    Memory.factoryInit = undefined;
}
monitor();
run(Game.creeps);
createRole.spawnNextInQue();
