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


CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    name_customer VARCHAR(255),
     address VARCHAR(255),
	is_flag BOOLEAN
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
	 account_id INT,
	is_flag BOOLEAN,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (account_id) REFERENCES accounts(id)
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
-- color_product 
insert into color_product (id,name_color,is_flag) values 
(1,'Black',0),
(2,'White',0),
(3,'Crimson',0),
(4,'Pink',0),
(5,'Yellow',0),
(6,'Indigo',0),
(7,'Green',0),
(8,'Purple',0),
(9,'Indigo',0),
(10,'Blue',0);

-- size_product
insert into size_product (id,name_size,is_flag) values 
(1,'36',0),
(2,'37',0),
(3,'38',0),
(4,'39',0),
(5,'40',0),
(6,'41',0),
(7,'42',0),
(8,'43',0),
(9,'44',0),
(10,'45',0);

-- brands

insert into brands (id,name_brands,is_flag) values 
(1,'Local brand',0),
(2,'No brand',0),
(3,'Gucci',0),
(4,'LV',0),
(5,'Nike',0),
(6,'Adidas',0),
(7,'Puma',0);

-- type_product

insert into type_product (id,name_type,is_flag) values 
(1,'Tee black',0),
(2,'Tee White',0),
(3,'Tee colorful',0),
(4,'Sweater',0),
(5,'Blazer',0),
(6,'Hoddie',0),
(7,'Tanktop',0),
(8,'Jacket',0),
(9,'Polo',0),
(10,'Trench Coat',0),
(11,'Varsity',0),
(12,'Workshirt',0),
(13,'Track Pants',0),
(14,'Flannel',0),
(15,'Baggy jean',0),
(16,'Kaki jean',0),
(17,'Jacket kaki',0),
(18,'Bomber',0),
(19,'Black shirt',0),
(20,'White shirt',0);

-- roles

insert into roles (id,name_role)
values
  (1,'MEMBER'),
  (2,'ADMIN');
  
-- customer

insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (1, 'Patric', '25/03/2023', '1', '6043 Dunning Street', '386 694 2488', 'pcauser0@ibm.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (2, 'Cathyleen', '24/11/2023', '0', '3479 Farragut Terrace', '703 788 8372', 'cdutch1@ow.ly', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (3, 'Travers', '26/03/2023', '1', '09755 Banding Hill', '525 671 3254', 'tbrothers2@myspace.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (4, 'Jehanna', '24/06/2023', '0', '30 Quincy Avenue', '454 203 2105', 'jbysh3@mapy.cz', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (5, 'Jory', '08/11/2023', '1', '75216 Blackbird Pass', '923 727 5881', 'jgittoes4@xing.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (6, 'Samantha', '01/11/2023', '0', '99 Milwaukee Hill', '480 551 3339', 'sjenicke5@google.it', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (7, 'Whitby', '30/09/2023', '1', '518 Delladonna Plaza', '729 773 6541', 'wmanktelow6@theguardian.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (8, 'Dex', '16/03/2023', '1', '333 Harbort Hill', '858 317 6405', 'ddanett7@wikimedia.org', 'ok˥', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (9, 'Melly', '28/03/2023', '0', '5148 Becker Junction', '650 259 8182', 'mwalkden8@ca.gov', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (10, 'Annissa', '06/07/2023', '0', '880 Schiller Drive', '413 661 9850', 'abeeze9@so-net.ne.jp', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (11, 'Walton', '05/06/2023', '1', '54348 Old Shore Circle', '486 661 4348', 'wfernehougha@fda.gov', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (12, 'Joly', '12/09/2023', '0', '645 Reinke Court', '795 924 6161', 'jcamillob@weibo.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (13, 'Eziechiele', '06/11/2023', '1', '2 Mandrake Pass', '703 261 4197', 'eheistermannc@gravatar.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (14, 'Gabby', '05/07/2023', '1', '4 Lillian Circle', '422 120 4163', 'glashamd@goo.gl', '̗̺͖̹̯͓Tok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (15, 'Simonne', '26/05/2023', '0', '641 Londonderry Terrace', '585 181 7076', 'stinkere@w3.org', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (16, 'Lynette', '18/10/2023', '0', '4 Longview Park', '663 725 5983', 'lbarettef@pbs.org', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (17, 'Hobey', '18/06/2023', '1', '715 Division Street', '430 422 4266', 'hbeadeg@army.mil', '﻿ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (18, 'Mack', '08/12/2022', '0', '79 Lukken Plaza', '244 903 6890', 'mwanjekh@google.it', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (19, 'Claybourne', '29/11/2023', '1', '7119 Dahle Street', '307 522 5870', 'cpatroni@tinyurl.com', 'ok', 0);
insert into customer (id, name_customer, birthday, gender_customer, address, phone_customer, email, note, is_flag) values (20, 'Kenny', '09/06/2023', '1', '7 Park Meadow Place', '195 877 3352', 'kkellowayj@businessweek.com', 'ok', 0);


-- accounts

insert into accounts (id, user_name, pass, is_flag, customer_id) values (1,'sfolbige0','123',0,1);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (2,'hgoricke1','123',0,2);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (3,'rferbrache2','123',0,3);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (4,'asaich3','123',0,4);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (5,'ddjurevic4','123', 0,5);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (6,'tklimkiewich5','123', 0,6);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (7,'amccoy6','123',0,7);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (8,'pbulbrook7','123',0,8);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (9,'cbailes8','123',0,9);
insert into accounts (id, user_name, pass, is_flag, customer_id) values (10,'doaker9','123',0,10);

-- products

insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (1, 'Tee black', 10000,'image',0,1,2,1,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (2, 'Tee White',10000,'image',0, 2,2,2, 5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (3, 'Tee colorful',10000,'image',0,5,2,3,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (4, 'Sweater',10000,'image',0,1,1,4,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (5, 'Blazer',10000,'image',0,1,1,5,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (6, 'Hoddie',10000,'image',0,1,1,6,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (7, 'Tanktop',10000,'image',0,1,1,7,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (8, 'Jacket',10000, 'Parkway',0,1,1,8,6);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (9, 'Polo',10000, 'Drive',0,1,1,9,6);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (10, 'Trench Coat',10000, 'Plaza',0,1,1,10,7);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (11, 'Varsity',10000, 'Crossing',0,1,1,11,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (12, 'Workshirt',10000, 'Hill',0,1,1,12,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (13, 'Track Pants',10000, 'Alley',0,1,1,13,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (14, 'Flannel',10000, 'Lane',0,1,2,14,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (15, 'Baggy jean',10000, 'Terrace',0,1,1,15,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (16, 'Kaki jean',10000, 'Parkway',0,1,1,16,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (17, 'Jacket kaki',10000, 'Point',0,1,1,17,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (18, 'Bomber',10000, 'Way',0,2,1,18,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (19, 'Black shirt',10000, 'Way',0,1,1,19,5);
insert into products (id, name_products, price, image, is_flag, color_id, brands_id, type_product_id, size_id) values (20, 'White shirt',10000, 'Circle',0,2,1,20,7);