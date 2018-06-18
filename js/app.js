'use strict';
// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

var salmonCookieShops = [];
var salmonShopSectionEl = document.getElementById('salmon-shops');

// College and Pence location object literal
var collegeAndPence = {
  storeName: 'College and Pence',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hourlyCookiesArray: [],
};
// College and Pence randomHourlyCustomers method
collegeAndPence.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};
// College and Pence simulatedHourlyCookies method
//Simulates the number of cookies sold per hour for this location
collegeAndPence.simulatedHourlyCookies = function () {
  var hoursOpen = 15;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyCookiesArray.push(Math.floor(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};
// College and Pence render section
collegeAndPence.render = function () {
  collegeAndPence.simulatedHourlyCookies();

  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;

  var ulEl = document.createElement('ul');

  for (var i in this.hourlyCookiesArray) {
    var liEl = document.createElement('li');
    if ((parseInt(i) + 6) < 12) {
      liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else if (parseInt(i) === 6) {
      liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else {
      liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    }
    ulEl.appendChild(liEl);
  }
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Chandler and 14th location object literal
var chandlerAnd14th = {
  storeName: 'Chandler and 14th',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hourlyCookiesArray: []
};
// Chandler and 14th randomHourlyCustomers method
chandlerAnd14th.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};
// Chandler and 14th simulatedHourlyCookies method
//Simulates the number of cookies sold per hour for this location
chandlerAnd14th.simulatedHourlyCookies = function () {
  var hoursOpen = 15;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyCookiesArray.push(Math.floor(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};
// Chandler and 14th render section
chandlerAnd14th.render = function () {
  chandlerAnd14th.simulatedHourlyCookies();

  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;

  var ulEl = document.createElement('ul');

  for (var i in this.hourlyCookiesArray) {
    var liEl = document.createElement('li');
    if ((parseInt(i) + 6) < 12) {
      liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else if (parseInt(i) === 6) {
      liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else {
      liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    }
    ulEl.appendChild(liEl);
  }
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Fresno and 14th object literal
var fresnoAnd14th = {
  storeName: 'Fresno and 14th',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hourlyCookiesArray: []
};
// Fresno and 14th randomHourlyCustomers method
fresnoAnd14th.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};
// Fresno and 14th simulatedHourlyCookies method
//Simulates the number of cookies sold per hour for this location
fresnoAnd14th.simulatedHourlyCookies = function () {
  var hoursOpen = 15;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyCookiesArray.push(Math.floor(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};
// Fresno and 14th render section
fresnoAnd14th.render = function () {
  fresnoAnd14th.simulatedHourlyCookies();

  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;

  var ulEl = document.createElement('ul');

  for (var i in this.hourlyCookiesArray) {
    var liEl = document.createElement('li');
    if ((parseInt(i) + 6) < 12) {
      liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else if (parseInt(i) === 6) {
      liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else {
      liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    }
    ulEl.appendChild(liEl);
  }
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Minnesota and Bond object literal
var minnesotaAndBond = {
  storeName: 'Minnesota and Bond',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hourlyCookiesArray: []
};
// Minnesota and Bond randomHourlyCustomers method
minnesotaAndBond.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};
// Minnesota and Bond simulatedHourlyCookies method
//Simulates the number of cookies sold per hour for this location
minnesotaAndBond.simulatedHourlyCookies = function () {
  var hoursOpen = 15;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyCookiesArray.push(Math.floor(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};
// Minnesota and Bond render section
minnesotaAndBond.render = function () {
  minnesotaAndBond.simulatedHourlyCookies();

  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;

  var ulEl = document.createElement('ul');

  for (var i in this.hourlyCookiesArray) {
    var liEl = document.createElement('li');
    if ((parseInt(i) + 6) < 12) {
      liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else if (parseInt(i) === 6) {
      liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else {
      liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    }
    ulEl.appendChild(liEl);
  }
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// NE Neff and NE Williamson object literal
var neffAndWilliamson = {
  storeName: 'NE Neff and NE Williamson',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  hourlyCookiesArray: []
};
// NE Neff and NE Williamson randomHourlyCustomers method
neffAndWilliamson.randomHourlyCustomers = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};
// NE Neff and NE Williamson simulatedHourlyCookies method
//Simulates the number of cookies sold per hour for this location
neffAndWilliamson.simulatedHourlyCookies = function () {
  var hoursOpen = 15;
  for (var i = 0; i < hoursOpen; i++) {
    this.hourlyCookiesArray.push(Math.floor(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
  }
};
// NE Neff and NE Williamson render section
neffAndWilliamson.render = function () {
  neffAndWilliamson.simulatedHourlyCookies();

  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;

  var ulEl = document.createElement('ul');

  for (var i in this.hourlyCookiesArray) {
    var liEl = document.createElement('li');
    if ((parseInt(i) + 6) < 12) {
      liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else if (parseInt(i) === 6) {
      liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    } else {
      liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
    }
    ulEl.appendChild(liEl);
  }
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};


salmonCookieShops.push(collegeAndPence);
salmonCookieShops.push(chandlerAnd14th);
salmonCookieShops.push(fresnoAnd14th);
salmonCookieShops.push(minnesotaAndBond);
salmonCookieShops.push(neffAndWilliamson);

for(var shop in salmonCookieShops){
  salmonCookieShops[shop].render();
}