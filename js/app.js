'use strict';

/***********************************
 * Global Variables for DOM Access *
 ***********************************/
var salmonShopSectionEl = document.getElementById('salmon-shops-table');
var newShopForm = document.getElementById('new-shop-form');

/***********************************
*         EVENT HANDLERS           *
************************************/
function handleAddNewShop(event) {
  event.preventDefault();

  var exists = checkIfExistsAndUpdate(event);
  // Grab values from input fields
  var newShopLocation = event.target.location.value;
  var newShopMinCustomers = event.target.minCustomers.value;
  var newShopMaxCustomers = event.target.maxCustomers.value;
  var newAvgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  // Clear fields
  event.target.location.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookiesPerCustomer.value = null;

  // Create new SalmonCookieStore object for new shop
  if (!exists){
    new SalmonCookieStore(newShopLocation, newShopMinCustomers, newShopMaxCustomers, newAvgCookiesPerCustomer);
    // Clear old table, render new
    salmonShopSectionEl.innerHTML = '';
    renderSalesTable();
  }
};

/***********************************
*         EVENT LISTENERS          *
************************************/
newShopForm.addEventListener('submit', handleAddNewShop);

/***********************************
 *   Salmon Cookie Object Segment  *
 ***********************************/
var salmonCookieStoresArray = [];
var hoursOpenArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Instantiate new SalmonCookieStore objects
new SalmonCookieStore('College and Pence', 23, 65, 6.3);
new SalmonCookieStore('Chandler and 14th', 3, 24, 1.2);
new SalmonCookieStore('Fresno and 14th', 11, 38, 3.7);
new SalmonCookieStore('Minnesota and Bond', 20, 38, 2.3);
new SalmonCookieStore('NE Neff and NE Williamson', 2, 16, 4.6);

// Salmon Cooke Store Object Constructor
function SalmonCookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = parseInt(minHourlyCustomers);
  this.maxHourlyCustomers = parseInt(maxHourlyCustomers);
  this.avgCookiesPerCustomer = parseFloat(avgCookiesPerCustomer);
  this.hourlyCookiesArray = [];
  this.dailyCookiesTotal = 0;
  this.hoursOpenArray = hoursOpenArray;

  // Add this object instance to the front of the stores Array
  salmonCookieStoresArray.unshift(this);
}

// Method that returns a random number of customers within an objects min/max
SalmonCookieStore.prototype.randomHourlyCustomers = function () {
  return Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// Method that stores an hourly amount of cookies in an objects hourlyCookiesArray
SalmonCookieStore.prototype.simulatedHourlyCookies = function () {
  this.hourlyCookiesArray = [];
  for (var i = 0; i < this.hoursOpenArray.length; i++) {
    this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};

// Method that keeps a daily total based on simulatedHourlyCookies
SalmonCookieStore.prototype.calcDailyCookiesTotal = function () {
  this.dailyCookiesTotal = 0;
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
  createElAndAppend('th', this.storeName, trEl);

  // Render table cell data for each store
  for (var hour in this.hoursOpenArray) {
    createElAndAppend('td', this.hourlyCookiesArray[hour], trEl);
  }
  // Add the daily total at the end of the row
  createElAndAppend('td', this.dailyCookiesTotal, trEl);
  salmonShopSectionEl.appendChild(trEl);
};

/***********************************
*          HELPER FUNCTIONS        *
************************************/
function checkIfExistsAndUpdate(event){

  for(var i = 0; i < salmonCookieStoresArray.length; i++){
    if(event.target.location.value.toLowerCase() === salmonCookieStoresArray[i].storeName.toLowerCase()){
      return true;
    }
  }
}

var calcAllShopsDailyTotal = function () {
  var allShopsDailyTotal = 0;
  for (var store in salmonCookieStoresArray) {
    allShopsDailyTotal += salmonCookieStoresArray[store].dailyCookiesTotal;
  }
  return allShopsDailyTotal;
};

// Helper function to create and append elements to a parent node
var createElAndAppend = function (el, content, parent) {
  var newEl = document.createElement(el);
  newEl.textContent = content;
  parent.appendChild(newEl);
};

// Global function to create a header row of hours for table data
var createHoursHeaderRow = function () {

  var trEl = document.createElement('tr');
  createElAndAppend('th', 'Store Locations', trEl);

  for (var hour in hoursOpenArray) {
    createElAndAppend('th', hoursOpenArray[hour], trEl);
  }

  createElAndAppend('th', 'Daily Total', trEl);
  salmonShopSectionEl.appendChild(trEl);
};

// Global function to create a footer row of hourly totals
var createFooterRow = function () {
  var trEl = document.createElement('tr');

  createElAndAppend('th', 'Hourly Totals', trEl);

  for (var i = 0; i < hoursOpenArray.length; i++) {
    var allShopsHourlyTotal = 0;
    for (var store in salmonCookieStoresArray) {
      allShopsHourlyTotal += salmonCookieStoresArray[store].hourlyCookiesArray[i];
    }

    createElAndAppend('td', allShopsHourlyTotal, trEl);
  }

  createElAndAppend('th', calcAllShopsDailyTotal(), trEl);
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