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
    product_detail_id INT,
    FOREIGN KEY (product_detail_id) REFERENCES product_detail(id)
);

CREATE TABLE product_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
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
  

-- accounts

insert into accounts (id, user_name, pass, is_flag) values (1,'sfolbige0','123',0,1);
insert into accounts (id, user_name, pass, is_flag) values (2,'hgoricke1','123',0,2);
insert into accounts (id, user_name, pass, is_flag) values (3,'rferbrache2','123',0,3);
insert into accounts (id, user_name, pass, is_flag) values (4,'asaich3','123',0,4);
insert into accounts (id, user_name, pass, is_flag) values (5,'ddjurevic4','123', 0,5);
insert into accounts (id, user_name, pass, is_flag) values (6,'tklimkiewich5','123', 0,6);
insert into accounts (id, user_name, pass, is_flag) values (7,'amccoy6','123',0,7);
insert into accounts (id, user_name, pass, is_flag) values (8,'pbulbrook7','123',0,8);
insert into accounts (id, user_name, pass, is_flag) values (9,'cbailes8','123',0,9);
insert into accounts (id, user_name, pass, is_flag ) values (10,'doaker9','123',0,10);

-- products

insert into products (name_products, price, image, is_flag, product_detail_id) values ('Tee black', 10000,'image',0,1);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Tee White',10000,'image',0,2);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Tee colorful',10000,'image',0,3);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Sweater',10000,'image',0,4);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Blazer',10000,'image',0,5);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Hoddie',10000,'image',0,6);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Tanktop',10000,'image',0,7);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Jacket',10000, 'Parkway',0,8);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Polo',10000, 'Drive',0,9);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Trench Coat',10000, 'Plaza',0,10);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Varsity',10000, 'Crossing',0,11);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Workshirt',10000, 'Hill',0,12);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Track Pants',10000, 'Alley',0,13);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Flannel',10000, 'Lane',0,14);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Baggy jean',10000, 'Terrace',0,15);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Kaki jean',10000, 'Parkway',0,16);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Jacket kaki',10000, 'Point',0,17);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Bomber',10000, 'Way',0,18);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('Black shirt',10000, 'Way',0,19);
insert into products (name_products, price, image, is_flag, product_detail_id) values ('White shirt',10000,'Circle',0,20);

-- product-detail

insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,2,1,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,2,2,2,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,5,2,3,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,4,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,5,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,6,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,7,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,8,6);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,9,6);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,10,7);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,11,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,12,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,13,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,2,14,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,15,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,16,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,17,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,2,1,18,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,1,1,19,5);
insert into product_detail (is_flag, color_id, brands_id, type_product_id, size_id) values (0,2,1,20,7);

-- lấy ra đối tượng product trùng tên nhưng khác size , khác loại , khác hãng , khác màu
select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct ,
            p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct ,
            cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct
            from products p join product_detail pd on p.product_detail_id = pd.id
            join brands b on pd.brands_id = b.id
            join color_product cp on pd.color_id = cp.id
            join size_product s on pd.size_id = s.id
            join type_product t on pd.type_product_id = t.id where (p.is_flag = 0
                and p.name_products like 'Tee black'
                );

-- query lấy ra các size có tên  = tên product
select  s.id ,s.name_size , s.is_flag
from products p join product_detail pd on p.product_detail_id = pd.id
                join brands b on pd.brands_id = b.id
                join color_product cp on pd.color_id = cp.id
                join size_product s on pd.size_id = s.id
                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0
    and p.name_products like 'Tee black')
        group by s.id;
-- lấy ra các loại có tên = tên product
select  t.id ,t.name_type ,t.is_flag
from products p join product_detail pd on p.product_detail_id = pd.id
                join brands b on pd.brands_id = b.id
                join color_product cp on pd.color_id = cp.id
                join size_product s on pd.size_id = s.id
                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0
    and p.name_products like 'Tee black')
group by t.id;
--  lấy ra các hãng có tên  = tên product
select  b.id,b.name_brands,b.is_flag
from products p join product_detail pd on p.product_detail_id = pd.id
                join brands b on pd.brands_id = b.id
                join color_product cp on pd.color_id = cp.id
                join size_product s on pd.size_id = s.id
                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0
    and p.name_products like 'Tee black')
group by b.id;

-- lấy ra các hãng màu có tên = tên product
select  cp.id ,cp.name_color ,cp.is_flag
from products p join product_detail pd on p.product_detail_id = pd.id
                join brands b on pd.brands_id = b.id
                join color_product cp on pd.color_id = cp.id
                join size_product s on pd.size_id = s.id
                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0
    and p.name_products like 'Tee black')
group by cp.id;