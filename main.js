
var run = require('run');
var factory = require('factory');
var monitor = require('monitor');
var createRole = require('createRole');
factory.init();
factory.run();

module.exports.loop = function () {
    factory.init();
   // factory.run();
    monitor();
    run(Game.creeps);
    createRole.spawnNextInQue();
}