"use strict";

var gameinfo = require("gameinfo");
var Human = require("human");
var game = new gameinfo();
var Cpu = require("cpu");
var cpu = new Cpu(game);
var Factory = require("factory");
var factory = new Factory(game);
Memory.spawnId = '5628bac6da849d48155d1a95';
Memory.controllerId = '55db3466efa8e3fe66e05dfd';
module.exports = {
    loop: function loop() {

        //取得所有活动的creep 让creep去工作
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            var human = new Human(creep, game);
            //    human.game = game;
            human.run();
        }
        cpu.run(game);
        factory.createNext();
    } };