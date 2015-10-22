class Factory{
    //创建下一个元素
  constructor(game){
    this.game = game;
    "use strict";

  }
  createNext(){
    "use strict";
      //this.game.home.createNext()
  console.log("nexting")
    if(Memory.createQue!==''){
      var role =  require("role." + Memory.createQue);
      var role = new role();
      var body = role.body
      this.game.home.createCreep(body,'',{role:Memory.createQue});
    }
  }

}


module.exports = Factory;