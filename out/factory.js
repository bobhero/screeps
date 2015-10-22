"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = (function () {
  //创建下一个元素

  function Factory(game) {
    _classCallCheck(this, Factory);

    this.game = game;
    "use strict";
  }

  _createClass(Factory, [{
    key: "createNext",
    value: function createNext() {
      "use strict";
      //this.game.home.createNext()
      console.log("nexting");
      if (Memory.createQue !== '') {
        var role = require("role." + Memory.createQue);
        var role = new role();
        var body = role.body;
        this.game.home.createCreep(body, '', { role: Memory.createQue });
      }
    }
  }]);

  return Factory;
})();

module.exports = Factory;