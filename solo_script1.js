// ! ! !
// Three Bugs:
// 1. The newArray is iterating over Atticus each time because the function calculatesSTI always starts at index 0.
// 2. DOM is displaying the original array, instead of the final array.
// 3. Bonus is being calculated incorrectly (getBaseSTI removed -1).

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var finalArray = [];

array.forEach(function(array) {
  calculateSTI(array);
})

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'


for(var i = 0; i < finalArray.length; i++){
  newEl = document.createElement('li');
  newText = document.createTextNode(finalArray[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];
  newArray[0] = array[0];

  var employeeNumber = array[1];
  var baseSalary = parseInt(array[2]);
  var reviewScore = parseInt(array[3]);
  console.log(employeeNumber, baseSalary, reviewScore);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);

  console.log(getBaseSTI(reviewScore), getYearAdjustment(employeeNumber), getIncomeAdjustment(baseSalary));


  if(bonus > 0.13){
    bonus = 0.13;
    console.log(bonus);
  }
 
  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);

  finalArray.push(newArray);
  console.log(finalArray);
  return newArray;

}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
