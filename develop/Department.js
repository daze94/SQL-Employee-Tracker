class Department {
    constructor(db) {
      this.db = db; // The database connection
    }
  
    // Method to view all departments
    viewAllDepartments() {
      return this.db.promise().query("SELECT id AS 'Department ID', name AS 'Department Name' FROM department");
    }
  
    // Method to add a new department
    addDepartment(name) {
      return this.db.promise().query("INSERT INTO department (name) VALUES (?)", [name]);
    }
  }
  
  module.exports = Department;
  