DROP DATABASE IF EXISTS shop;

CREATE DATABASE shop;

USE shop;

CREATE TABLE Checkout (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  address varchar(255) not null,
  line1 varchar(255) not null,
  line2 varchar(255) not null,
  city varchar(255) not null,
  state varchar(255) not null,
  zip int not null,
  phone varchar(255) not null,
  cc int not null,
  date varchar(255) not null,
  cvv int not null,
  billing int not null
);

INSERT INTO Checkout (name, email, password, address, line1, line2, city, state, zip, phone, cc, date, cvv, billing) VALUES ('Lisa', 'lisa.hank@gmail.com', '123adsf', '123', 'W. Rainbow Ave.', '', 'Los Angeles', 'CA', 87650, '213-980-7659', 123456789, '12/20', 345, 87650);