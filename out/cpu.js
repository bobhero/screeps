//CPU是调度器,动态取得当前人物分配 ,资源情况 ,决定策略(目前主要是决定生产啥样的人)

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cpu = (function () {
    function Cpu(game) {
        _classCallCheck(this, Cpu);

        this.game = game;
        "use strict";
    }

    //创建下一个元素

    _createClass(Cpu, [{
        key: "run",
        value: function run() {
            "use strict";
            console.log("cpu running");

            var creeps = Game.creeps;
            var currentRoles = [];
            for (var name in creeps) {
                var creep = creeps[name];
                var role = creep.memory.role;
                if (role == undefined) {
                    continue;
                }
                currentRoles.push(role);
            }
            var need = this.need();
            Memory.createQue = '';
            for (var i in need) {
                var n = need[i];
                var f = currentRoles.indexOf(n);
                if (f == -1) {
                    Memory.createQue = n;
                    break;
                } else {
                    currentRoles.splice(f, 1);
                }
            }
        }
    }, {
        key: "need",
        value: function need() {
            "use strict";
            return ["farmer", "farmer", "farmer", "upgrater"];
        }
    }]);

    return Cpu;
})();

module.exports = Cpu;