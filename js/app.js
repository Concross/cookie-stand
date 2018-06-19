'use strict';
// Array for all salmon store objects
var salmonCookieStoresArray = [];
var salmonShopSectionEl = document.getElementById('salmon-shops');

// Instantiate new SalmonCookieStore objects
new SalmonCookieStore('College and Pence', 23, 65, 6.3);
new SalmonCookieStore('Chandler and 14th', 3, 24, 1.2);
new SalmonCookieStore('Fresno and 14th', 11, 38, 3.7);
new SalmonCookieStore('Minnesota and Bond', 20, 38, 2.3);
new SalmonCookieStore('NE Neff and NE Williamson', 2, 16, 4.6);

// Salmon Cooke Store Object Constructor
function SalmonCookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookiesArray = [];
  this.dailyCookiesTotal = 0;
  this.hoursOpenArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  // Add this object instance to the stores Array
  salmonCookieStoresArray.push(this);
}
// Open Hours array for a universal reference
SalmonCookieStore.hoursOpenArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Method that returns a random number of customers within an objects min/max
SalmonCookieStore.prototype.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// Method that stores an hourly amount of cookies in an objects hourlyCookiesArray
SalmonCookieStore.prototype.simulatedHourlyCookies = function () {
  for (var i = 0; i < this.hoursOpenArray.length; i++) {
    this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};

// Method that keeps a daily total based on simulatedHourlyCookies
SalmonCookieStore.prototype.calcDailyCookiesTotal = function () {
  for (var cookies in this.hourlyCookiesArray) {
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
  return this.dailyCookiesTotal;
};

// Method that renders an object's hourly cookie sales into a table
SalmonCookieStore.prototype.render = function () {
  // Call necessary functions for render
  this.simulatedHourlyCookies();
  this.calcDailyCookiesTotal();
  // Create table row and start the row with a store name header
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);
  // Render table cell data for each store
  for (var hour in this.hoursOpenArray) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArray[hour];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookiesTotal;
  trEl.appendChild(tdEl);
  salmonShopSectionEl.appendChild(trEl);
};

var calcAllShopsDailyTotal = function () {
  var allShopsDailyTotal = 0;
  for (var store in salmonCookieStoresArray){
    allShopsDailyTotal += salmonCookieStoresArray[store].dailyCookiesTotal;
  }
  return allShopsDailyTotal;
};
// Global function to create a header row of hours for table data
var createHoursHeaderRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for (var hour in SalmonCookieStore.hoursOpenArray) {
    thEl = document.createElement('th');
    thEl.textContent = SalmonCookieStore.hoursOpenArray[hour];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  salmonShopSectionEl.appendChild(trEl);
};

// Global function to create a footer row of hourly totals
var createFooterRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  for(var i = 0; i < SalmonCookieStore.hoursOpenArray.length; i++){
    var allShopsHourlyTotal = 0;
    var tdEl = document.createElement('td');
    for (var store in salmonCookieStoresArray) {
      allShopsHourlyTotal += salmonCookieStoresArray[store].hourlyCookiesArray[i];
      console.log(allShopsHourlyTotal);
    }
    tdEl.textContent = allShopsHourlyTotal;
    trEl.appendChild(tdEl);
  }

  // Render the daily total across all shops
  thEl = document.createElement('th');
  thEl.textContent = calcAllShopsDailyTotal();
  trEl.appendChild(thEl);

  salmonShopSectionEl.appendChild(trEl);
};

// Render header row and all current salmon cookie store data to the sales page
var renderSalesTable = function () {
  createHoursHeaderRow();

  for (var store in salmonCookieStoresArray) {
    salmonCookieStoresArray[store].render();
  }
  createFooterRow();
};
renderSalesTable();