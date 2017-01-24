-- SQL files, will be executed at launch.
-- We need two users, one with rw right and another with just r right
-- Please julien create them
-- We need just one database : the Geoloc Database
-- After that you're free to create you're tables
--
--Dont forget to test the existence of the same users and database
--Julien PHILIPPE
--Geoloc DB Tables creation script

--Création de la base
DROP DATABASE IF EXISTS Geoloc;

CREATE DATABASE Geoloc;

\connect geoloc;

--Gestion des utilisateurs
DROP USER IF EXISTS datasource;
DROP USER IF EXISTS datauser;

CREATE USER datasource WITH PASSWORD 'source';
CREATE USER datauser WITH PASSWORD 'use';

GRANT CONNECT ON DATABASE Geoloc TO datasource;
GRANT CONNECT ON DATABASE Geoloc TO datauser; 


--Création des tables
DROP TABLE  IF EXISTS signal;
DROP TABLE  IF EXISTS device;
DROP TABLE  IF EXISTs device_table;
DROP TABLE  IF EXISTS vehicule;
DROP TABLE  IF EXISTS vehicule_type;

CREATE TABLE device_type (
	id_device_type SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	create_date DATE,
	create_by VARCHAR(20), 
	change_date DATE, 
	change_by VARCHAR(20));

GRANT USAGE, SELECT ON SEQUENCE device_type_id_device_type_seq TO datasource;
GRANT SELECT ON device_type TO datasource;
GRANT UPDATE ON device_type TO datasource;
GRANT INSERT ON device_type TO datasource;

GRANT SELECT ON device_type TO datauser;

CREATE TABLE device (
	id_device SERIAL PRIMARY KEY,
	id_device_type INTEGER REFERENCES device_type (id_device_type),
	create_date DATE,
	create_by VARCHAR(20), 
	change_date DATE, 
	change_by VARCHAR(20));

GRANT USAGE, SELECT ON SEQUENCE device_id_device_seq TO datasource;
GRANT SELECT ON device TO datasource;
GRANT UPDATE ON device TO datasource;
GRANT INSERT ON device TO datasource;

GRANT SELECT ON device TO datauser;

CREATE TABLE vehicule_type (
	id_vehicule_type SERIAL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	create_date DATE,
	create_by VARCHAR(20), 
	change_date DATE, 
	change_by VARCHAR(20));

GRANT USAGE, SELECT ON SEQUENCE vehicule_type_id_vehicule_type_seq TO datasource;
GRANT SELECT ON vehicule_type TO datasource;
GRANT UPDATE ON vehicule_type TO datasource;
GRANT INSERT ON vehicule_type TO datasource;

GRANT SELECT ON vehicule_type TO datauser;


CREATE TABLE vehicule (
	id_vehicule SERIAL PRIMARY KEY, 
	fingerprint VARCHAR(20), 
	id_vehicule_type INTEGER REFERENCES vehicule_type (id_vehicule_type),
	create_date DATE, 
	create_by VARCHAR(20), 
	change_date DATE, 
	change_by VARCHAR(20));

GRANT USAGE, SELECT ON SEQUENCE vehicule_id_vehicule_seq TO datasource;
GRANT SELECT ON vehicule TO datasource;
GRANT UPDATE ON vehicule TO datasource;
GRANT INSERT ON vehicule TO datasource;

GRANT SELECT ON vehicule TO datauser;

CREATE TABLE signal 
	(id_signal SERIAL PRIMARY KEY, 
	id_device INTEGER REFERENCES device (id_device) NOT NULL,
	id_vehicule INTEGER REFERENCES vehicule(id_vehicule),
	record_date DATE NOT NULL,
	gps_localisation_latitude INTEGER NOT NULL,
	gps_localisation_longitude INTEGER NOT NULL,
	signal_distance FLOAT8 NOT NULL,
	signal_volume INTEGER NOT NULL,
	create_date DATE,
	create_by VARCHAR(20),
	change_date DATE,
	change_by VARCHAR(20));

GRANT USAGE, SELECT ON SEQUENCE signal_id_signal_seq TO datasource;
GRANT SELECT ON signal TO datasource;
GRANT UPDATE ON signal TO datasource;
GRANT INSERT ON signal TO datasource;

GRANT SELECT ON signal TO datauser;


--Création des triggers
CREATE FUNCTION insert_creator_and_date() RETURNS TRIGGER AS $insert_creator_and_date$
	BEGIN
		NEW.create_date := current_timestamp;
		NEW.create_by := current_user;
		RETURN NEW;
	END;
$insert_creator_and_date$ LANGUAGE plpgsql;

CREATE TRIGGER insert_creator_and_date BEFORE INSERT ON device
    FOR EACH ROW EXECUTE PROCEDURE insert_creator_and_date();

CREATE TRIGGER insert_creator_and_date BEFORE INSERT ON signal
    FOR EACH ROW EXECUTE PROCEDURE insert_creator_and_date();

CREATE TRIGGER insert_creator_and_date BEFORE INSERT ON vehicule
    FOR EACH ROW EXECUTE PROCEDURE insert_creator_and_date();

CREATE TRIGGER insert_creator_and_date BEFORE INSERT ON vehicule_type
    FOR EACH ROW EXECUTE PROCEDURE insert_creator_and_date();

CREATE TRIGGER insert_creator_and_date BEFORE INSERT ON device_type
    FOR EACH ROW EXECUTE PROCEDURE insert_creator_and_date();

CREATE FUNCTION update_creator_and_date() RETURNS TRIGGER AS $update_creator_and_date$
	BEGIN
		NEW.change_date := current_timestamp;
		NEW.change_by := current_user;
		RETURN NEW;
	END;
$update_creator_and_date$ LANGUAGE plpgsql;

CREATE TRIGGER update_creator_and_date BEFORE UPDATE ON device
    FOR EACH ROW EXECUTE PROCEDURE update_creator_and_date();

CREATE TRIGGER update_creator_and_date BEFORE UPDATE ON signal
    FOR EACH ROW EXECUTE PROCEDURE update_creator_and_date();

CREATE TRIGGER update_creator_and_date BEFORE UPDATE ON vehicule
    FOR EACH ROW EXECUTE PROCEDURE update_creator_and_date();

CREATE TRIGGER update_creator_and_date BEFORE UPDATE ON vehicule_type
    FOR EACH ROW EXECUTE PROCEDURE update_creator_and_date();

CREATE TRIGGER update_creator_and_date BEFORE UPDATE ON device_type
    FOR EACH ROW EXECUTE PROCEDURE update_creator_and_date();

