DROP TABLE IF EXISTS Produits;
DROP TABLE IF EXISTS Categories;

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO Categories (name) VALUES
    ('Homme'),
    ('Femme'),
    ('Enfant');

CREATE TABLE Produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    discountPrice DECIMAL(10, 2),
    image VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- Pour la catégorie "BasketCatalogue"
INSERT INTO Produits (name, description, price, discountPrice, image, category_id)
VALUES
    ('Nike Dunk Low', 'Description de la basket 1', 129.99, 159.99, 'Basket1', 1),
    ('New Balance Unisexe 9060', 'Description de la basket 2', 150.00, 190.00, 'Basket2', 1),
    ('Nike Dunk Low Anthracite', 'Description de la basket 3', 105.00, 130.00, 'Basket5', 1),
    ('Nike Sport', 'Description de la basket 4', 90.00, 120.00, 'Basket6', 1),
    ('Nike Dunk Low Blue', 'Description de la basket 5', 115.00, 140.00, 'Basket7', 1);

-- Pour la catégorie "KidsCategorie"
INSERT INTO Produits (name, description, price, discountPrice, image, category_id)
VALUES
    ('Essentials Brushed Back Hoodie', 'Description du sweat', 60.00, 80.00, 'Veste1', 3),
    ('Essentials Brushed Back Pant', 'Description du pantalon', 55.00, 75.00, 'Pantalon1', 3),
    ('FC Porto Home Youth Short Sleeve Jersey', 'Description du t-shirt', 70.00, 99.00, 'Veste2', 3),
    ('Tenacity Football Training Pant', 'Description du pantalon', 40.00, 65.00, 'Pantalon2', 3);

-- Pour la catégorie "MenCategorie"
INSERT INTO Produits (name, description, price, discountPrice, image, category_id)
VALUES
    ('Wide leg jeans Blue', 'Description du pantalon 1', 29.99, 39.99, 'Pantalon1', 1),
    ('Jogging - NEW BALANCE', 'Description du pantalon 2', 59.99, 79.99, 'Pantalon11', 1),
    ('DAY Birger & Mikkelsen', 'Description du pantalon 3', 179.95, 239.95, 'Pantalon2', 1),
    ('Shifted Pant', 'Description du pantalon 4', 80.00, 85.00, 'Pantalon3', 1),
    ('Pant 27"', 'Description du pantalon', 55.00, 75.00, 'Pantalon4', 1),
    ('Pant 47"', 'Description du pantalon', 55.00, 75.00, 'Pantalon5', 1),
    ('Pant 18"', 'Description du pantalon', 55.00, 75.00, 'Pantalon6', 1),
    ('Pant 31"', 'Description du pantalon', 55.00, 75.00, 'Pantalon7', 1),
    ('Sweat-shirt New Balance Oversized', 'Description de la veste 1', 60.00, 80.00, 'Veste1', 1),
    ('NB Sweat Beige Oversized', 'Description de la veste 2', 40.00, 60.00, 'Veste2', 1),
    ('Sweat-shirt Grey New Balance Oversized', 'Description de la veste 3', 42.00, 57.00, 'Veste3', 1),
    ('Interlock Jacket', 'Description de la veste 4', 120.00, 140.00, 'Veste4', 1),
    ('NB Sweat Red Oversized', 'Description de la veste 5', 120.00, 140.00, 'Veste5', 1),
    ('Tshirt All Star', 'Description de la veste 6', 70.00, 100.00, 'Veste6', 1);

-- Pour la catégorie "PantsCatalogue"
INSERT INTO Produits (name, description, price, discountPrice, image, category_id)
VALUES
    ('Wide leg jeans Blue', 'Description du pantalon 1', 29.99, 39.99, 'Pantalon8', 1),
    ('Jogging - NEW BALANCE', 'Description du pantalon 2', 59.99, 79.99, 'Pantalon9', 1),
    ('DAY Birger & Mikkelsen', 'Description du pantalon 3', 179.95, 239.95, 'Pantalon10', 1),
    ('Shifted Pant', 'Description du pantalon 4', 80.00, 85.00, 'Pantalon11', 1),
    ('Pant 27"', 'Description du pantalon', 55.00, 75.00, 'Pantalon12', 1),
    ('Pant 47"', 'Description du pantalon', 55.00, 75.00, 'Pantalon13', 1),
    ('Pant 18"', 'Description du pantalon', 55.00, 75.00, 'Pantalon14', 1),
    ('Pant 31"', 'Description du pantalon', 55.00, 75.00, 'Pantalon15', 1);

-- Pour la catégorie "TShirtCatalogue"
INSERT INTO Produits (name, description, price, discountPrice, image, category_id)
VALUES
    ('Sweat-shirt New Balance Oversized', 'Description du sweat 1', 60.00, 80.00, 'Veste7', 1),
    ('NB Sweat Beige Oversized', 'Description du sweat 2', 40.00, 60.00, 'Veste8', 1),
    ('Sweat-shirt Grey New Balance Oversized', 'Description du sweat 3', 42.00, 57.00, 'Veste9', 1),
    ('Interlock Jacket', 'Description du sweat 4', 120.00, 140.00, 'Veste10', 1),
    ('NB Sweat Red Oversized', 'Description du sweat 5', 120.00, 140.00, 'Veste11', 1),
    ('Tshirt All Star', 'Description du t-shirt 1', 70.00, 100.00, 'Veste12', 1),
    ('Tshirt Nike Dunk Low Anthracite', 'Description du t-shirt 2', 35.00, 50.00, 'Veste13', 1),
    ('Tshirt Space Jam Bugs', 'Description du t-shirt 3', 50.00, 70.00, 'Veste14', 1);
