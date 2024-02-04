const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
const Department = require('./develop/Department');
const Role = require('./develop/Role');
const Employee = require('./develop/Employee');

const department = new Department(db);
const role = new Role(db);
const employee = new Employee(db);

function mainMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'View All Departments':
        viewAllDepartments();
        break;
      case 'View All Roles':
        viewAllRoles();
        break;
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'Add a Department':
        addDepartment();
        break;
      case 'Add a Role':
        addRole();
        break;
      case 'Add an Employee':
        addEmployee();
        break;
      case 'Update an Employee Role':
        updateEmployeeRole();
        break;
      case 'Exit':
        console.log('Exiting application...');
        db.end(); // Close the database connection
        return; // Ensure to stop further execution
      default:
        console.log(`Invalid action: ${answer.action}`);
        mainMenu(); // Return to main menu for invalid actions
        break;
    }
  }).catch(error => {
    console.error('Error with inquirer prompt:', error);
    mainMenu(); // Return to main menu in case of error
  });
}

function viewAllDepartments() {
  department.viewAllDepartments()
    .then(([rows]) => {
      console.table('All Departments', rows);
      mainMenu(); // Return to the main menu after displaying the departments
    })
    .catch(err => {
      console.error('Error viewing all departments:', err);
      mainMenu(); // Return to the main menu in case of error
    });
}

function viewAllRoles() {
    role.viewAllRoles()
      .then(([rows]) => {
        console.table('All Roles', rows);
        mainMenu(); 
      })
      .catch(err => {
        console.error('Error viewing all roles:', err);
        mainMenu();
      });
  }
  
  function viewAllEmployees() {
    employee.viewAllEmployees()
      .then(([rows]) => {
        console.table('All Employees', rows);
        mainMenu();
      })
      .catch(err => {
        console.error('Error viewing all employees:', err);
        mainMenu();
      });
  }
  
  function addDepartment() {
  }
  
  function addRole() {
  }
  
  function addEmployee() {
  }
  
  function updateEmployeeRole() {
  }

mainMenu();
