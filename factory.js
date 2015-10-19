var countRole = require("countRole");
module.exports = {
    init: function (homeid) {
        if(Memory.factoryInit != undefined)
            return;
        Memory.factoryInit = true;
        Memory.home = Game.getObjectById(homeid);

        //Memory
        this.memory();

    },


    //设置需要的角色数量动态的
    memory:function(){
        if(Memory.createQue == undefined)
            Memory.createQue = [ ];

        Memory.source = Memory.home.room.find(FIND_SOURCES);
        //Memory.
        Memory.requireCreeps = [
            'farmer',
            'farmer',
            'uper',
        ]
    }


}