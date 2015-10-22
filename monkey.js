class Monkey {

    constructor(creep,game){
        "use strict";
        this.creep = creep;
        this.game = game;
    }

    setGame(game){
        "use strict";
        this.game = game;

    }
    setCreep(creep){
        "use strict";
        this.creep = creep;
    }


}
module.exports = Monkey;
