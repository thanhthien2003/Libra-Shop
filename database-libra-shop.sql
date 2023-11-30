CREATE DATABASE libra_shop;
use libra_shop;
CREATE TABLE color_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_color VARCHAR(255),
    is_flag BOOLEAN
);

CREATE TABLE size_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_size VARCHAR(255),
    is_flag BOOLEAN
);

CREATE TABLE brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_brands VARCHAR(255),
    is_flag BOOLEAN
);

CREATE TABLE type_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_type VARCHAR(255),
    is_flag BOOLEAN
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_role VARCHAR(255) NOT NULL,
    is_flag BOOLEAN
);

CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
	name_customer VARCHAR(255),
	birthday VARCHAR(255),
	gender_customer BOOLEAN,
    address VARCHAR(255),
	phone_customer VARCHAR(255),
    email VARCHAR(255),
    note VARCHAR(255),
    is_flag BOOLEAN
);

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
	is_flag BOOLEAN,
	customer_id INT,
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE account_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    role_id INT,
    is_flag BOOLEAN,
    FOREIGN KEY (account_id) REFERENCES accounts(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_products VARCHAR(255),
    price DOUBLE,
    image VARCHAR(255),
	is_flag BOOLEAN,
    color_id INT,
    brands_id INT,
    type_product_id INT,
    size_id INT,
    FOREIGN KEY (color_id) REFERENCES color_product(id),
    FOREIGN KEY (brands_id) REFERENCES brands(id),
    FOREIGN KEY (type_product_id) REFERENCES type_product(id),
	FOREIGN KEY (size_id) REFERENCES size_product(id)
);

CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_image VARCHAR(255),
    is_flag BOOLEAN,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_order VARCHAR(255),
	is_flag BOOLEAN,
    account_id INT,
    total_amount DOUBLE,
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE order_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantity INT,
    order_id INT,
    product_id INT,
    is_flag BOOLEAN,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE product_reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating DOUBLE,
    comment_review VARCHAR(255),
    date_review VARCHAR(255),
    product_id INT,
    customer_id INT,
	is_flag BOOLEAN,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantity INT,
    account_id INT,
    product_id INT,
    is_flag BOOLEAN,
    FOREIGN KEY (account_id) REFERENCES accounts(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE ware_house (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_start VARCHAR(255),
	quantity INT,
    product_id INT,
    is_flag BOOLEAN,
    FOREIGN KEY (product_id) REFERENCES products(id)
);



