CREATE DATABASE busket_buddies; --This SQL statement creates a new PostgreSQL database named "busket_buddies."

CREATE TABLE grocery_list(
    groc_id SERIAL PRIMARY KEY, --used to be item_id
    item_name VARCHAR(255), --used to be type
    description VARCHAR(255), 
    quantity INT,
    price NUMERIC(10,2)
);