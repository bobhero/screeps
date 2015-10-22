"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = (function () {
    function Human(creep, game) {
        _classCallCheck(this, Human);

        var farmer = require("role.farmer");
        var upgrater = require("role.upgrater");
        this.creep = creep;
        this.game = game;
        var role = creep.memory.role;
        var roleClass = require("role." + role);
        this.role = Object.create(roleClass)

        this.role.setGame(game)
        this.role.setCreep(creep);
        //this.role  = new Upgrater(creep,game)
    }

    _createClass(Human, [{
        key: "run",
        value: function run() {
            "use strict";
            return this.role.run();
        }
    }]);

    return Human;
})();

module.exports = Human;