select * 
from products

ALTER TABLE products
ADD subcategory VARCHAR(200);

UPDATE products
SET category = 'LiftTicket'
WHERE subcategory = 'Beginner';

CREATE TABLE orders
(id SERIAL PRIMARY KEY,
shipname TEXT,
billname TEXT,
total DECIMAL,
orderdate DATE,
status TEXT,
userid INT REFERENCES users(id)
);

CREATE TABLE line_items
(id SERIAL PRIMARY KEY,
product_id INT REFERENCES products(id),
order_id INT REFERENCES orders(id)
);

INSERT INTO products
(name, description, price, ticket, category, subcategory)
VALUES
('Adult Pre Season Pass', 'Ages 13-64', 784.00, true, 'SeasonPass', 'Adult'),
('Senior Pre Season Pass', 'Ages 65 and Older', 345.00, true, 'SeasonPass', 'Senior'),
('Student Pre Season Pass', 'Ages 13-18 and in School', 605.00, true, 'SeasonPass', 'Student'),
('Child Pre Season Pass', 'Ages 6-12', 309.00, true, 'SeasonPass', 'Child'),
('Tot Pre Season Pass', 'Ages 5 and Under', 44.00, true, 'SeasonPass', 'Tot'),
('Weekday Only Pre Season Pass', 'Can be used over holiday periods', 550.00, true, 'SeasonPass', 'Weekday'),
('Adult Regular Season Pass', 'Ages 13-64', 979.00, true, 'SeasonPass', 'Adult'),
('Senior Regular Season Pass', 'Ages 65 and Older', 430.00, true, 'SeasonPass', 'Senior'),
('Student Regular Season Pass', 'Ages 13-18 and in School', 756.00, true, 'SeasonPass', 'Student'),
('Child Regular Season Pass', 'Ages 6-12', 385.00, true, 'SeasonPass', 'Child'),
('Tot Regular Season Pass', 'Ages 5 and Under', 54.00, true, 'SeasonPass', 'Tot'),
('Weekday Only Regular Season Pass', 'Can be used over holiday periods', 687.00, true, 'SeasonPass', 'Weekday'),
('Family Pre Season Pass 1st', '1st Member Pre Season', 784.00, true, 'SeasonPass', 'Family'),
('Family Pre Season Pass 2nd', '2nd Member Pre Season', 605.00, true, 'SeasonPass', 'Family'),
('Family Pre Season Pass 3rd', '3rd Member Pre Season', 345.00, true, 'SeasonPass', 'Family'),
('Family Pre Season Pass 4th', '4th Member Pre Season', 283.00, true, 'SeasonPass', 'Family'),
('Family Pre Season Pass 5th', '5th Member Pre Season', 283.00, true, 'SeasonPass', 'Family'),
('Family Regular Season Pass 1st', '1st Member Regular Season', 979.00, true, 'SeasonPass', 'Family'),
('Family Regular Season Pass 2nd', '2nd Member Regular Season', 756.00, true, 'SeasonPass', 'Family'),
('Family Regular Season Pass 3rd', '3rd Member Regular Season', 430.00, true, 'SeasonPass', 'Family'),
('Family Regular Season Pass 4th', '4th Member Regular Season', 353.00, true, 'SeasonPass', 'Family'),
('Family Regular Season Pass 5th', '5th Member Regular Season', 353.00, true, 'SeasonPass', 'Family');

DELETE FROM line_items
WHERE product_id = 1 AND order_id = 19;