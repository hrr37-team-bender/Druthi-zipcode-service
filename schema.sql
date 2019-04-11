DROP DATABASE IF EXISTS zipcodeService;
CREATE DATABASE IF NOT EXISTS zipcodeService;

USE zipcodeService;


CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT,
    zipcodes VARCHAR(20),
    product_id INT,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS zipcodes (
    id INT AUTO_INCREMENT,
    zipcode INT,
    local_delivery TIME,
    shipping_delivery TIME,
    PRIMARY KEY (id)
);




