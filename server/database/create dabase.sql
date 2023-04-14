CREATE DATABASE cafecito

USE cafecito
CREATE TABLE brands (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (nombre)
);

INSERT INTO brands (nombre) VALUES ('Import'), ('La Virginia');

CREATE TABLE varieties (
  id INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (NAME)
);

INSERT INTO varieties (NAME) VALUES ('Arabica'), ('Robusta');


CREATE TABLE origins (
  id INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (NAME)
);

INSERT INTO origins (NAME) VALUES ('Brasil'), ('Italia'), ('Colombia'), ('Guatemala'), ('Etiopia'), ('Argentina');

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  CODE VARCHAR(10) NOT NULL,
  NAME VARCHAR(255) NOT NULL,
  description TEXT,
  notes TEXT,
  intensity INT,
  brand_id INT NOT NULL,
  origin_id INT NOT NULL,
  variety_id INT NOT NULL,
  height DECIMAL(10,2),
  price DECIMAL(10,2) NOT NULL,
  img_url VARCHAR(255),
  stock INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY (CODE),
  FOREIGN KEY (brand_id) REFERENCES brands (id),
  FOREIGN KEY (origin_id) REFERENCES origins (id),
  FOREIGN KEY (variety_id) REFERENCES varieties (id)
);

INSERT INTO products (CODE, NAME, description, notes, intensity, brand_id, origin_id, variety_id, height, price, img_url, stock)
VALUES (
'IMPORT02',
'02 | BRASIL NATUR',
'Los granos de este café 100% arábica producidos a 1200 mts de altura, provienen de las mejores granjas cafeteras de Brasil, específicamente localizadas en lo alto de las montañas de Cerrado Mineiro en el estado de Minas Gerais, sinónimo de excelencia por su clima templado y suelos fértiles para la producción de café de especialidad.',
'Combinación de chocolate amargo y leche, almendras y caramelo.',
'3/6',
1,
1,
1,
1200,
115,
'https://drive.google.com/file/d/1cm8IP0r0BuOobUUq6wO7-i2E3v8C6v2E/view?usp=share_link',
6
)

UPDATE `cafecito`.`products` SET `intensity` = '3/6' WHERE `id` = '1' 
