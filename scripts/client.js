$(document).ready (onReady);

let employee = [];

function onReady (){
    $('#submitEmployeeButton').on('click', gatherEmployeeInput);
    $('#employeeOut').on('click','.removeEmployeeButton', removeEmployee);
}

function gatherEmployeeInput (){
console.log ('in gather employee input');

let addEmployee ={
     firstName: $('#firstNameIn').val(),
     lastName: $('#lastNameIn').val(),
     idNumber: $('#idNumberIn').val(),
     jobTitle: $('#jobTitleIn').val(),
     annualSalary: $('#annualSalaryIn').val()
 }//end employee

console.log ('Add Employee', addEmployee);
//push employee into array
employee.push (addEmployee);
console.log(employee);
displayEmployee ( employee);
// empty feilds
$('#firstNameIn').val('');
 $('#lastNameIn').val('');
 $('#idNumberIn').val('');
 $('#jobTitleIn').val('');
$('#annualSalaryIn').val('');
}// end add employee

function displayEmployee(){
    console.log ('in displayEmployee');
//diplay on DOM
//target output element
let el = $('#employeeOut');
// empty
el.empty();
let employeeSalary = 0;
//loop through array
for (let i=0; i<employee.length; i++){
//apppend each employee to DOM // diplay as li 
    el.append (`<li>${employee[i].firstName} ${employee[i].lastName}: ${employee[i].idNumber}, ${employee[i].jobTitle}, $${employee[i].annualSalary}
   <button class="removeEmployeeButton" data-index="${i}">remove</button></li`);
    employeeSalary += Number( employee[i].annualSalary); 
}
// display salary value
el =$('#totalMonthlyCost');
el.empty();
el.append(employeeSalary/12);
console.log ('employee salary', employeeSalary);
console.log  ('total Monthly', totalMonthlyCost);
if (employeeSalary/12> 20000){
    $('#totalMonthlyCost').css('background-color','red');
}
// display employee salary
}

// if (totalMonthlyCost < 20000){
  //  $('#totalMonthlyCost').css('background-color','red');
//console.log (totalMonthlyCost);
 //}
function removeEmployee(){
console.log ('in remove employee'); 
//$ (this).parent().remove();// This removed the line item but keeps the Total Monthly 
console.log( $(this).data('index'));
//splice this item
employee.splice($(this).data('index'), 1);
displayEmployee (employee);

}




//DONE -  A 'Submit' button should collect the form information, 
//Done store the information to 
//Done calculate monthly costs
//DONE - append information to the DOM 
//DONE - clear the input fields. 
//Using the stored information
//DONE calculate monthly costs
//DONE append this to the to DOM.
// If statement grater than or less than
// If the total monthly cost exceeds $20,000
// use class css to  add a red background color to the total monthly cost.

//DONE Create a delete button that removes an employee from the DOM. 
//DONE For Base mode, it does not need to remove that Employee's salary from the reported total.

