'use strict';

// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

var CollegeAndPence = {
  storeName: 'College and Pence',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
};