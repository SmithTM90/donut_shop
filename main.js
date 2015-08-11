
var DonutShop = function(locationName, avgMin, avgMax, avgDon, dailyHours) {
  this.locationName = locationName;
  this.avgMin = avgMin;
  this.avgMax = avgMax;
  this.avgDon = avgDon;
  this.dailyHours = dailyHours;
  this.dailySales = 0;
}

  DonutShop.prototype.calcCust = function() {
    return Math.floor(Math.random() * this.avgMax - this.avgMin) + 1;
  }

  DonutShop.prototype.hourlySales = function() {
    return this.calcCust() * this.avgDon;
  }

  //DonutShop.prototype.dailySales = function() {



  //return this.hourlySales() * this.dailyHours;
  // }

  DonutShop.prototype.createRow = function() {

    console.log("hit");

    var shopList = document.getElementById('shop-list');

    var timeOfDay = document.getElementsByClassName('time-of-day').length;

    var times = document.getElementById('times');

    var location = document.getElementById('location');

    var dailyTotal = document.getElementById('daily-total');

    var tableRow = document.createElement('tr');

    var locationCell = document.createElement('th');

    locationCell.innerHTML = this.locationName;

    tableRow.appendChild(locationCell);

    for (var i = 0; i < timeOfDay; i++) {
      console.log("hit loop");
      var cell = document.createElement('td');
        cell.className = 'donPerHour';
        cell.innerHTML = this.hourlySales();
        this.dailySales += this.hourlySales();
        tableRow.appendChild(cell);
    }
    shopList.appendChild(tableRow);
    dailyTotal.innerHTML = this.dailySales;
  }

var downTown = new DonutShop("Downtown", 8, 43, 4.50, 11);
var capHill = new DonutShop("Capitol Hill", 4, 37, 2.00, 11);
var southLake = new DonutShop("South Lake Union", 9, 23, 6.33, 11);
var wedgeWood = new DonutShop("Wedgewood", 2, 28, 1.25, 11);
var ballard = new DonutShop("Ballard", 8, 58, 3.75, 11);

downTown.createRow();
capHill.createRow();
southLake.createRow();
wedgeWood.createRow();
ballard.createRow();
