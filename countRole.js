module.exports = function(type)
{


    var count = Game.screeps.find(MY_CREEPS, {
        filter: function(creep)
        {
            if(creep.memory.role == type)
                return true;

            return false;
        }
    }).length;



    return count;
};