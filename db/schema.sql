-- DROP DATABASE IF EXISTS overwatch_dev;
-- CREATE DATABASE overwatch_dev; 

-- \c overwatch_dev;


-- CREATE TABLE overwatch_hero (
--     overwatch_id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     role TEXT NOT NULL,
--     base_of_operations TEXT NOT NULL,
--     image TEXT NOT NULL
    
-- );


-- CREATE TABLE collections (
--     collection_id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     size INTEGER NOT NULL,
--     type TEXT NOT NULL,
--     color TEXT NOT NULL,
--     price INTEGER NOT NULL,
--     is_owned BOOLEAN NOT NULL DEFAULT True,
--     image TEXT NOT NULL, 
--     overwatch_id INT REFERENCES overwatch_hero(overwatch_id)
    
-- ); 

