class Human {

    constructor(creep,game){
        var Farmer = require("role.farmer");
        var Upgrater = require("role.upgrater");
        this.creep = creep;
        this.game = game;
        var role = creep.memory.role;
        var roleClass = require("role." + role);
        this.role =  new require("role." + role);
        this.role.game = game;
        this.role.creep = creep;
        //this.role  = new Upgrater(creep,game)
    }
    run(){
        "use strict";
         return this.role.run();

    }


}
module.exports = Human;