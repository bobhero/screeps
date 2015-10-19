var countRole = require("countRole");
module.exports = {
    init: function (homeid) {
        if(Memory.factoryInit != undefined){
            console.log('inited ' + homeid);
            return;
        }
        console.log('initing')

        Memory.factoryInit = true;
        Memory.home = Game.getObjectById(homeid);

        //Memory
        this.memory();

    },

    memory:function(){
        if(Memory.createQue == undefined || ((typeof Memory.createQue) !=="object"))
            Memory.createQue = [];

        Memory.source = Memory.home.room.find(FIND_SOURCES);
        //Memory.
        Memory.requireCreeps = [
            'farmer',
            'farmer',
            'uper',
        ]
    }


}