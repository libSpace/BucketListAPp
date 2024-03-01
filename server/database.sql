CREATE DATATBASE bucketlist;

CREATE TABLE item(
    item_id SERIAL PRIMARY KEY,
    type VARCHAR(255),
);