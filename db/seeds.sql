INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineeriing'),
    ('Finance'),
    ('Legal');

INSERT INTO role 
    (title, salary, department_id)

VALUES
    ('Sales Lead', 140000, 1),
    ('Salesperson', 90000, 1),
    ('Lead Engineer', 140000, 2),
    ('Software Engineer', 110000, 2),
    ('Account Manager', 170000, 3),
    ('Accountant', 135000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);