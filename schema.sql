DROP DATABASE IF EXISTS zipcodeService;
CREATE DATABASE IF NOT EXISTS zipcodeService;

USE zipcodeService;

CREATE TABLE IF NOT EXISTS zipcodes (
    id INT AUTO_INCREMENT,
    zipcode INT,
    address VARCHAR(200),
    street VARCHAR(20),
    product_ids VARCHAR(50),
    PRIMARY KEY (id)
);




