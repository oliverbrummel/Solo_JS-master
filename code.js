var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];



//work for problem one
var monthsListed = "Months listed are ";
for (var i = 0; i < stringList.length; i++) {
    if (i < stringList.length - 1 ) {
      monthsListed += stringList[i] + ", ";
    } else {
      monthsListed += stringList[i];
    }
};

console.log("problem one:", monthsListed);


//work for problem two
console.log("problem two:", numList[numList.length - 1]);


//work for problem three
var numString = "";
for (var n = 0; n <= numList[n]; n++) {
  numString += numList[n].toString();
};

console.log("problem three:", numString);


//work for problem four
var numTotal = 0;
for (var l = 0; l < numList.length; l++) {
  numTotal += parseInt(numList[l]);
};

console.log("problem four:", numTotal);


//work for problem five
var returnedNumber = 0;
for (var x = 0; x < boolList.length; x++) {
  if (boolList[1] === true){
    returnedNumber = numList[0] + numList[numList.length-1];
  } else {
    returnedNumber = numList[1] * numList[1];
  };
};

console.log("problem five:", returnedNumber);


//work for problem six
for (var y = 0; y < boolList.length; y++) {
  if (boolList[y] == true) {
    console.log("problem six:", numList[y]);
  }
};
