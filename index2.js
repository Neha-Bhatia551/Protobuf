 const schema = require('./employees_pb');
 const fs = require('fs');
 const neha = new schema.Employee();

 neha.setId(2);
 neha.setName('Neha');
 neha.setSalary(2000);

 const john = new schema.Employee();

 john.setId(1);
 john.setName('John Doe');
 john.setSalary(1000);

 const anurag = new schema.Employee();
 anurag.setId(3);
 anurag.setName('Anurag');
 anurag.setSalary(1500);
 
const employees = new schema.Employees(); 
employees.addEmployees(john);
employees.addEmployees(neha);
employees.addEmployees(anurag);

var binaryData = employees.serializeBinary();
console.log(binaryData); 
fs.writeFileSync('employeeBinaryData', binaryData);

//converting binart to readable data
binaryData = fs.readFileSync('employeeBinaryData'); 
const employeesFromBinary = schema.Employees.deserializeBinary(binaryData);
console.log(employeesFromBinary.toString());
