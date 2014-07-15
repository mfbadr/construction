'use strict';

function House(name, material, year ){
  this.name = name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}

House.prototype.area = function(){
  var houseArea = 0;
  for( var i = 0; i < this.rooms.length; i++){
    houseArea += this.rooms[i].area();
  }
  return houseArea;
};


module.exports = House;
