const fs = require('fs'); 
const employees = []

employees.push({
    'name': 'John Doe',
    'salary': 1000,
    'id': 1
});
 
const neha = {
    'name': 'Neha',
    'salary': 2000,
    'id': 2
}
employees.push(neha);

employees.push({
    'name': 'Anurag',
    'salary': 1500,
    'id': 3
});
fs.writeFileSync('jsonData.json', JSON.stringify(employees)); 
console.log(JSON.stringify(employees));

