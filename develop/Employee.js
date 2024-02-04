class Employee {
    constructor(db) {
      this.db = db; // The database connection
    }
  
    // Method to view all employees
    viewAllEmployees() {
      return this.db.promise().query(
        "SELECT e.id AS 'ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', role.title AS 'Role', department.name AS 'Department', role.salary AS 'Salary', CONCAT(m.first_name, ' ', m.last_name) AS 'Manager' FROM employee e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee m ON e.manager_id = m.id"
      );
    }
  
    // Method to add a new employee
    addEmployee(firstName, lastName, roleId, managerId) {
      return this.db.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId]);
    }
  
    // Method to update an employee's role
    updateEmployeeRole(employeeId, newRoleId) {
      return this.db.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [newRoleId, employeeId]);
    }
  }
  
  module.exports = Employee;
  