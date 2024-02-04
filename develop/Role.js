class Role {
    constructor(db) {
      this.db = db; // The database connection
    }
  
    // Method to view all roles
    viewAllRoles() {
      return this.db.promise().query(
        "SELECT role.id AS 'Role ID', role.title AS 'Title', department.name AS 'Department', role.salary AS 'Salary' FROM role JOIN department ON role.department_id = department.id"
      );
    }
  
    // Method to add a new role
    addRole(title, salary, departmentId) {
      return this.db.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [title, salary, departmentId]);
    }
  }
  
  module.exports = Role;
  