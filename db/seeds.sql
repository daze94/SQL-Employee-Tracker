USE employee_tracker;

INSERT INTO department (name) VALUES ('Engineering'), ('Human Resources'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 50000, 1), ('HR Manager', 45000, 2), ('Accountant', 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, NULL), ('Emily', 'Jones', 3, 1);
