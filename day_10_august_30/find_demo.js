let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// find the first female employee in this array
let first_female_emp = employees.find((emp) => emp.gender === 'female');
console.log(first_female_emp);

// find the index of first female employee
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log(first_female_emp_ind);

// find the last female employee 
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log(last_female_emp);

// find the index of the last female employee 
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log(last_female_emp_ind);

// find all the female employees
let all_female_emps = employees.filter((emp) => emp.gender === 'female');
console.log(all_female_emps);