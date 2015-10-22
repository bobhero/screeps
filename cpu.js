//CPU是调度器,动态取得当前人物分配 ,资源情况 ,决定策略(目前主要是决定生产啥样的人)




class Cpu{
    constructor(game){
        this.game = game;
        "use strict";

    }
    //创建下一个元素
    run(){
        "use strict";
        console.log("cpu running");

        var creeps = Game.creeps;
        var currentRoles = [];
        for(var name in creeps){
            var creep = creeps[name];
            var role = creep.memory.role;
            if(role==undefined){
                continue;
            }
            currentRoles.push(role);
        }
        var need = this.need();
        Memory.createQue = '';
        for(var i in need){
            var n = need[i];
            var f = currentRoles.indexOf(n);
            if(f == -1){
                Memory.createQue = n;
                break;
            }else {
                currentRoles.splice(f,1);
            }
        }

    }
    need(){
        "use strict";
        return [

            "farmer",
            "farmer",
            "farmer",
            "upgrater",
        ];
    }

}

module.exports = Cpu;