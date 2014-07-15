'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.floor = floor;
  this.color = color;
  this.height = height;
}

Room.prototype.area = function(){
  return this.length * this.width;
};

Room.prototype.cost = function(){
  var roomCost = 0;
  var footCost = 0;
  switch(this.floor){
    case 'tile':
      footCost = 12;
      break;
    case 'carpet':
      footCost = 15;
      break;
    case 'wood':
      footCost = 10;
  }
  roomCost += (footCost * this.area()); //add cost of floor to roomCost
  roomCost += (( (2*this.height*this.length)+(2*this.height*this.length))*0.5); //add cost of walls to roomcost
                                                              //at 50 cents a sq ft
  return roomCost;
};


module.exports = Room;


