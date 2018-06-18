'use strict';
// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// College and Pence location object literal
var collegeAndPence = {
  storeName: 'College and Pence',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
};
// College and Pence randomHourlyCustomers method
collegeAndPence.randomHourlyCustomers = function (){
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// Chandler and 14th location object literal
var chandlerAnd14th = {
  storeName: 'Chandler and 14th',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
};
// Chandler and 14th randomHourlyCustomers method
chandlerAnd14th.randomHourlyCustomers = function (){
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// Fresno and 14th object literal
var fresnoAnd14th = {
  storeName: 'Fresno and 14th',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
};
// Fresno and 14th randomHourlyCustomers method
fresnoAnd14th.randomHourlyCustomers = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// Minnesota and Bond object literal
var minnesotaAndBond = {
  storeName: 'Minnesota and Bond',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
};
// Minnesota and Bond randomHourlyCustomers method
minnesotaAndBond.randomHourlyCustomers = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

// NE Neff and NE Williamson object literal
var neNeffAndNEWilliamson = {
  storeName: 'NE Neff and NE Williamson',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
};
// NE Neff and NE Williamson randomHourlyCustomers method
neNeffAndNEWilliamson.randomHourlyCustomers = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};