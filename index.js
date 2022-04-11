// Write your solution in this file!
const employee = {name:"desmond", streetAddress: "komboni road"};

beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  
});




function updateEmployeeWithKeyAndValue(employee, key, value) {
  let coemployee= { ...employee};
  coemployee[key] = value;
  return coemployee;
}

beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  
});

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}


beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  
});


function deleteFromEmployeeByKey(employee, key) {

  let coemployee= { ...employee};
  delete coemployee[key];
  return coemployee;
}


beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  
});


function destructivelyDeleteFromEmployeeByKey(employee,key){
  
  delete employee[key];
  
  return employee;
}