'use strict';

var salmonCookieStoresArray = [];
var salmonShopSectionEl = document.getElementById('salmon-shops');

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

  for (var hour in this.hoursOpenArray){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArray[hour];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookiesTotal;
  trEl.appendChild(tdEl);
  salmonShopSectionEl.appendChild(trEl);
};

new SalmonCookieStore('College and Pence', 23, 65, 6.3, 15);

// salmonCookieStoresArray[0].simulatedHourlyCookies();
// salmonCookieStoresArray[0].calcDailyCookiesTotal();
salmonCookieStoresArray[0].render();

// // College and Pence location object literal
// var collegeAndPence = {
//   storeName: 'College and Pence',
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   avgCookiesPerCustomer: 6.3,
//   hourlyCookiesArray: [],
//   dailyCookiesTotal: 0
// };
// // College and Pence randomHourlyCustomers method
// collegeAndPence.randomHourlyCustomers = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
// };
// // College and Pence simulatedHourlyCookies method
// //Simulates the number of cookies sold per hour for this location
// collegeAndPence.simulatedHourlyCookies = function () {
//   var hoursOpen = 15;
//   // Add a random number of customers times avg cookies per hour for each hour open
//   for (var i = 0; i < hoursOpen; i++) {
//     this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// // College and Pence render section
// collegeAndPence.render = function () {
//   this.simulatedHourlyCookies();

//   // Calculate daily total cookies for this shop
//   for (var cookies in this.hourlyCookiesArray) {
//     this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
//   }
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;

//   var ulEl = document.createElement('ul');

//   // Create list items for each hour and render it
//   for (var i in this.hourlyCookiesArray) {
//     var liEl = document.createElement('li');
//     if ((parseInt(i) + 6) < 12) { // Check if it's before 12pm
//       liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else if (parseInt(i) === 6) { // If it is 12pm
//       liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else { // If its after 12 pm
//       liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     }
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
//   ulEl.appendChild(liEl);

//   salmonShopSectionEl.appendChild(h2El);
//   salmonShopSectionEl.appendChild(ulEl);

// };

// // Chandler and 14th location object literal
// var chandlerAnd14th = {
//   storeName: 'Chandler and 14th',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   avgCookiesPerCustomer: 1.2,
//   hourlyCookiesArray: [],
//   dailyCookiesTotal: 0
// };
// // Chandler and 14th randomHourlyCustomers method
// chandlerAnd14th.randomHourlyCustomers = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
// };
// // Chandler and 14th simulatedHourlyCookies method
// //Simulates the number of cookies sold per hour for this location
// chandlerAnd14th.simulatedHourlyCookies = function () {
//   var hoursOpen = 15;
//   for (var i = 0; i < hoursOpen; i++) {
//     this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// // Chandler and 14th render section
// chandlerAnd14th.render = function () {
//   this.simulatedHourlyCookies();

//   for (var cookies in this.hourlyCookiesArray) {
//     this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
//   }
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;

//   var ulEl = document.createElement('ul');

//   for (var i in this.hourlyCookiesArray) {
//     var liEl = document.createElement('li');
//     if ((parseInt(i) + 6) < 12) {
//       liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else if (parseInt(i) === 6) {
//       liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else {
//       liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     }
//     ulEl.appendChild(liEl);
//   };
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
//   ulEl.appendChild(liEl);

//   salmonShopSectionEl.appendChild(h2El);
//   salmonShopSectionEl.appendChild(ulEl);

// };

// // Fresno and 14th object literal
// var fresnoAnd14th = {
//   storeName: 'Fresno and 14th',
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   avgCookiesPerCustomer: 3.7,
//   hourlyCookiesArray: [],
//   dailyCookiesTotal: 0
// };
// // Fresno and 14th randomHourlyCustomers method
// fresnoAnd14th.randomHourlyCustomers = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
// };
// // Fresno and 14th simulatedHourlyCookies method
// //Simulates the number of cookies sold per hour for this location
// fresnoAnd14th.simulatedHourlyCookies = function () {
//   var hoursOpen = 15;
//   for (var i = 0; i < hoursOpen; i++) {
//     this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// // Fresno and 14th render section
// fresnoAnd14th.render = function () {
//   this.simulatedHourlyCookies();

//   for (var cookies in this.hourlyCookiesArray) {
//     this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
//   }
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;

//   var ulEl = document.createElement('ul');

//   for (var i in this.hourlyCookiesArray) {
//     var liEl = document.createElement('li');
//     if ((parseInt(i) + 6) < 12) {
//       liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else if (parseInt(i) === 6) {
//       liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else {
//       liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     }
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
//   ulEl.appendChild(liEl);

//   salmonShopSectionEl.appendChild(h2El);
//   salmonShopSectionEl.appendChild(ulEl);

// };

// // Minnesota and Bond object literal
// var minnesotaAndBond = {
//   storeName: 'Minnesota and Bond',
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   avgCookiesPerCustomer: 2.3,
//   hourlyCookiesArray: [],
//   dailyCookiesTotal: 0
// };
// // Minnesota and Bond randomHourlyCustomers method
// minnesotaAndBond.randomHourlyCustomers = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
// };
// // Minnesota and Bond simulatedHourlyCookies method
// //Simulates the number of cookies sold per hour for this location
// minnesotaAndBond.simulatedHourlyCookies = function () {
//   var hoursOpen = 15;
//   for (var i = 0; i < hoursOpen; i++) {
//     this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// // Minnesota and Bond render section
// minnesotaAndBond.render = function () {
//   this.simulatedHourlyCookies();

//   for(var cookies in this.hourlyCookiesArray){
//     this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
//   }
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;

//   var ulEl = document.createElement('ul');

//   for (var i in this.hourlyCookiesArray) {
//     var liEl = document.createElement('li');
//     if ((parseInt(i) + 6) < 12) {
//       liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else if (parseInt(i) === 6) {
//       liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else {
//       liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     }
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
//   ulEl.appendChild(liEl);

//   salmonShopSectionEl.appendChild(h2El);
//   salmonShopSectionEl.appendChild(ulEl);

// };

// // NE Neff and NE Williamson object literal
// var neffAndWilliamson = {
//   storeName: 'NE Neff and NE Williamson',
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   avgCookiesPerCustomer: 4.6,
//   hourlyCookiesArray: [],
//   dailyCookiesTotal: 0
// };
// // NE Neff and NE Williamson randomHourlyCustomers method
// neffAndWilliamson.randomHourlyCustomers = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
// };
// // NE Neff and NE Williamson simulatedHourlyCookies method
// //Simulates the number of cookies sold per hour for this location
// neffAndWilliamson.simulatedHourlyCookies = function () {
//   var hoursOpen = 15;
//   for (var i = 0; i < hoursOpen; i++) {
//     this.hourlyCookiesArray.push(Math.ceil(this.randomHourlyCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// // NE Neff and NE Williamson render section
// neffAndWilliamson.render = function () {
//   this.simulatedHourlyCookies();

//   for(var cookies in this.hourlyCookiesArray){
//     this.dailyCookiesTotal += this.hourlyCookiesArray[cookies];
//   }
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;

//   var ulEl = document.createElement('ul');

//   for (var i in this.hourlyCookiesArray) {
//     var liEl = document.createElement('li');
//     if ((parseInt(i) + 6) < 12) {
//       liEl.textContent = (parseInt(i) + 6) + 'am: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else if (parseInt(i) === 6) {
//       liEl.textContent = (parseInt(i) + 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     } else {
//       liEl.textContent = (parseInt(i) - 6) + 'pm: ' + this.hourlyCookiesArray[i] + ' cookies';
//     }
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.dailyCookiesTotal + ' cookies';
//   ulEl.appendChild(liEl);
//   salmonShopSectionEl.appendChild(h2El);
//   salmonShopSectionEl.appendChild(ulEl);

// };

// // Push all current locations to salmonCookieStoresArray array
// salmonCookieStoresArray.push(collegeAndPence);
// salmonCookieStoresArray.push(chandlerAnd14th);
// salmonCookieStoresArray.push(fresnoAnd14th);
// salmonCookieStoresArray.push(minnesotaAndBond);
// salmonCookieStoresArray.push(neffAndWilliamson);

// // Render each location on the page in an unordered list
// for (var shop in salmonCookieStoresArray) {
//   salmonCookieStoresArray[shop].render();
// }