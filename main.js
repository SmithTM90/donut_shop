
var DonutShop = function(locationName, avgMin, avgMax, avgDon, dailyHours) {
  this.locationName = locationName;
  this.avgMin = avgMin;
  this.avgMax = avgMax;
  this.avgDon = avgDon;
  this.dailyHours = dailyHours;
}

  DonutShop.prototype.calcCust = function() {
    return Math.floor(Math.random() * this.avgMax - this.avgMin) + this.avgMin;
  }

  DonutShop.prototype.hourlySales = function() {
    return this.calcCust() * this.avgDon;
  }

  DonutShop.prototype.dailySales = function() {
    return this.hourlySales() * this.dailyHours;
  }

var downTown = new DonutShop("Downtown", 8, 43, 4.50, 11);
var capHill = new DonutShop("Capitol Hill", 4, 37, 2.00, 11);
var southLake = new DonutShop("South Lake Union", 9, 23, 6.33, 11);
var wedgeWood = new DonutShop("Wedgewood", 2, 28, 1.25, 11);
var ballard = new DonutShop("Ballard", 8, 58, 3.75, 11);

DonutShop();
