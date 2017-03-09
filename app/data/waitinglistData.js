// DATA
// Below data will hold all of the waitlist tables.
// Initially set it equal to a "dummy" customer.

var waitingArray = [
  {
    customerName: "Saima",
    customerEmail: "saima@example.com",
    phoneNumber: "000-000-0000",
    customerID: "saimacool"
  }
];

// Export the array. This makes it accessible to other files using require.
module.exports = waitingArray;