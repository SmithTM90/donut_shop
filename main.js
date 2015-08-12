'use strict'

var shopsArray = [];

var DonutShop = function(locationName, avgMin, avgMax, avgDon, array) {
  this.locationName = locationName;
  this.avgMin = avgMin;
  this.avgMax = avgMax;
  this.avgDon = avgDon;
  this.dailySales = 0;
  this.hourlyRates = [];
  array.push(this);
}

  DonutShop.prototype.calcCust = function() {
    return Math.floor(Math.random() * (this.avgMax - this.avgMin) + 1);
  }

  DonutShop.prototype.hourlySales = function() {
    return this.calcCust() * this.avgDon;
  }

  DonutShop.prototype.createRow = function() {

    var shopList = document.getElementById('shop-list');
    var timeOfDay = document.getElementsByClassName('time-of-day').length;
    var times = document.getElementById('times');
    var location = document.getElementById('location');
    var dailyTotal = document.getElementById('daily-total');
    var tableRow = document.createElement('tr');
    var locationCell = document.createElement('th');
    locationCell.innerHTML = this.locationName;

    tableRow.appendChild(locationCell);

    for (var i = 0; i < 11; i++) {
      var hourlyRate = this.hourlySales();
      var cell = document.createElement('td');
        cell.className = 'donPerHour';
        cell.innerHTML = this.hourlySales();
        this.dailySales += hourlyRate;
        this.hourlyRates.push(hourlyRate);
        tableRow.appendChild(cell);
    }
      var dailyTotal = document.createElement('td');
      dailyTotal.id = 'daily-total';
      tableRow.appendChild(dailyTotal);
      shopList.appendChild(tableRow);
      dailyTotal.innerHTML = this.dailySales;
  }

var cellChange = function(){
  for (var i = 0; i < shopsArray.length; i++);
}

var downTown = new DonutShop("Downtown", 8, 43, 4.50, shopsArray);
var capHill = new DonutShop("Capitol Hill", 4, 37, 2.00, shopsArray);
var southLake = new DonutShop("South Lake Union", 9, 23, 6, shopsArray);
var wedgeWood = new DonutShop("Wedgewood", 2, 28, 1.25, shopsArray);
var ballard = new DonutShop("Ballard", 8, 58, 3.75, shopsArray);

downTown.createRow();
capHill.createRow();
southLake.createRow();
wedgeWood.createRow();
ballard.createRow();

//console.log(shopsArray);

document.getElementById('newShop').addEventListener('submit', function(e) {
  e.preventDefault(); console.log("hit button");
  addNewShop();
});

function addNewShop(){
    var loc = document.getElementById('shoplocation');
    var min = document.getElementById('mincust');
    var max = document.getElementById('maxcust');
    var avg = document.getElementById('avgdon');

    var newDonutShop = new DonutShop(loc.value, parseInt(min.value), parseInt(max.value), parseInt(avg.value), shopsArray);
    newDonutShop.createRow();
  }
