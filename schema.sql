-- What do we want to know about owners?
create table owners (
    id serial primary key,
    name text,
    phone_number varchar(20)

    -- Do owners have one pet or many
    -- pet_id integer reference pets (id); -- :()

);



-- What do we want to know about pets?
create table pets (
    id serial primary key,
    name text,
    species varchar(100),

     -- we can derive the age from a birthdate
     birthdate date, 
     -- When you have the info in another table, ask yourself:
     -- Do pets have one owner?
     -- Do pets have many owners?
     -- If pets have one and only one
     -- Then you put the foreign key right here
     owner_id integer REFERENCES owners (id)
     -- Th integer references the id in the table "owners"
);

-- psql -f schema.sql fullstack-pets
-- psql -f seed.sql fullstack-pets


-- Chris will demo many-to-many
-- create table pets_owners (
--     -- This table needs no id
--     owner_id integer references owners (id),
--     pet_id integer REFERENCES pets (id)
-- );