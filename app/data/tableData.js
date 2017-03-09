// DATA
// Below data will hold all of the reserved tables.
// Initially set to equal a "dummy" customer.
// Could also be an empty array as well.

var tableArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  }
];

// Export the array. This makes it accessible to other files using require.
module.exports = tableArray;