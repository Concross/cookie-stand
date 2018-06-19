'use strict';

var salmonCookieShops = [];
var salmonShopSectionEl = document.getElementById('salmon-shops');

// College and Pence location object literal
var collegeAndPence = {
  storeName: 'College and Pence',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hourlyCookiesArray: [],
  dailyCookiesTotal: 0
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

  for (var cookies in this.hourlyCookiesArray) {
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
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
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
  ulEl.appendChild(liEl);

  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Chandler and 14th location object literal
var chandlerAnd14th = {
  storeName: 'Chandler and 14th',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hourlyCookiesArray: [],
  dailyCookiesTotal: 0
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

  for (var cookies in this.hourlyCookiesArray) {
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
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
  };
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
  ulEl.appendChild(liEl);

  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Fresno and 14th object literal
var fresnoAnd14th = {
  storeName: 'Fresno and 14th',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hourlyCookiesArray: [],
  dailyCookiesTotal: 0
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

  for (var cookies in this.hourlyCookiesArray) {
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
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
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
  ulEl.appendChild(liEl);

  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Minnesota and Bond object literal
var minnesotaAndBond = {
  storeName: 'Minnesota and Bond',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hourlyCookiesArray: [],
  dailyCookiesTotal: 0
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

  for(var cookies in this.hourlyCookiesArray){
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
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
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
  ulEl.appendChild(liEl);

  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// NE Neff and NE Williamson object literal
var neffAndWilliamson = {
  storeName: 'NE Neff and NE Williamson',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  hourlyCookiesArray: [],
  dailyCookiesTotal: 0
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

  for(var cookies in this.hourlyCookiesArray){
    this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
  }
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
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
  ulEl.appendChild(liEl);
  salmonShopSectionEl.appendChild(h2El);
  salmonShopSectionEl.appendChild(ulEl);

};

// Push all current locations to salmonCookieShops array
salmonCookieShops.push(collegeAndPence);
salmonCookieShops.push(chandlerAnd14th);
salmonCookieShops.push(fresnoAnd14th);
salmonCookieShops.push(minnesotaAndBond);
salmonCookieShops.push(neffAndWilliamson);

// Render each location on the page in an unordered list
for (var shop in salmonCookieShops) {
  salmonCookieShops[shop].render();
}