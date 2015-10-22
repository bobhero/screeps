"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Monkey = (function () {
    function Monkey(creep, game) {
        "use strict";

        _classCallCheck(this, Monkey);

        this.creep = creep;
        this.game = game;
    }

    _createClass(Monkey, [{
        key: "setGame",
        value: function setGame(game) {
            "use strict";
            this.game = game;
        }
    }, {
        key: "setCreep",
        value: function setCreep(creep) {
            "use strict";
            this.creep = creep;
        }
    }]);

    return Monkey;
})();

module.exports = Monkey;