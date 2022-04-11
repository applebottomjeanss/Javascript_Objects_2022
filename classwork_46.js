// OBJECTIVE: Get practice with JavaScript Objects and learn how to make them and access them.

// 1. Make an object called "house" with the following properties (name/value pairs):
// a) numberOfRooms (data-type = number)
// b) numberOfBathrooms (data-type = number)
// c) hasGarage (data-type = boolean)
// d) listOfRooms (data-type = array with strings)
// e) hasStairs (data-type = boolean)
let house = {
    numberOfRooms: 5,
    numberOfBathrooms: 2,
    HasGarage: false,
    listOfRooms: ["living rooms" , "Bedroom" , "Guest Bedroom" , "Kitchen"],
    hasStairs : true,
}

// 2. Print out (output) the number of rooms it has.
console.log(house.numberOfRooms);

// 3. Print out if it has a garage or not.
console.log(house.HasGarage);

// 4. Print out the list of rooms.
console.log(house.listOfRooms)
// 5. Make a function that will take in an array as a parameter
// and will loop through that array to check for duplicates. If the
// list has a duplicate at least return true, otherwise return false.

function findDuplicate () {
    let array = ["Math", "History", "English" , "Science"];
    let list = [ ];
    for(let i = 0; i < arr.length; i++) {
        if(list[array[i]]) {
            return true;
            
         }
         
         }
      }