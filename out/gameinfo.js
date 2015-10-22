"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameInfo = (function () {
    function GameInfo() {
        _classCallCheck(this, GameInfo);
    }

    _createClass(GameInfo, [{
        key: "home",
        get: function get() {
            "use strict";
            return Game.getObjectById(Memory.spawnId);
        }
    }, {
        key: "totalSpawnEnergy",
        get: function get() {
            return Game.spawns.BHOME.energy;
        }
    }, {
        key: "controller",
        get: function get() {
            "use strict";
            return Game.getObjectById(Memory.controllerId);
        }
    }, {
        key: "sources",
        get: function get() {
            "use strict";
            console.log(Game.getObjectById(Memory.spawnId).room.find(FIND_SOURCES_ACTIVE));
            return Game.getObjectById(Memory.spawnId).room.find(FIND_SOURCES_ACTIVE);
        }
    }, {
        key: "eCenter",
        get: function get() {
            "use strict";
        }
    }, {
        key: "source",
        get: function get() {
            "use strict";
            var creeps = [];
            for (var i in Game.s) {
                var creep = Game.creeps[i];
                creeps.push(creep);
            }
            return creeps;
        }
    }]);

    return GameInfo;
})();

module.exports = GameInfo;