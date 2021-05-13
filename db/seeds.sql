INSERT INTO department (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title,salary,department_id)
VALUES
('Sales Lead',	100000,	1),
('Salesperson',	80000,	1),
('Lead Engineer', 150000,2),
('Software Engineer',	120000,	2),
('Accountant',	125000,	3),
('Legal Team Lead',	250000,	4),
('Lawyer',	190000,	4),
('Lead Engineer',	150000,	2);




INSERT INTO employee (first_name, last_name, roles_id)
VALUES
  ( 'Ronald', 'Firbank',1),
  ('Virginia', 'Woolf',2),
  ('Piers', 'Gaveston',3),
  ( 'Charles', 'LeRoi', 5),
  ('Katherine', 'Mansfield', 6),
  ( 'Dora', 'Carrington', 6),
  ('Edward', 'Bellamy', 7),
  ('Montague', 'Summers',7),
  ('Octavia', 'Butler', 8),
  ( 'Unica', 'Zurn', 8);