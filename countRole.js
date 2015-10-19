module.exports = function(type)
{


    var count = Memory.home.room.find(FIND_MY_CREEPS, {
        filter: function(creep)
        {
            if(creep.memory.role == type)
                return true;

            return false;
        }
    }).length;



    return count;
};