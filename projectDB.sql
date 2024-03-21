CREATE DATABASE cs4347project;

USE cs4347project;
#DROP TABLE PROFILE;

CREATE TABLE PROFILE(
	NetID INT PRIMARY KEY,
    Verification_Status BOOLEAN,
    Email VARCHAR(1000),
    Buy_Rating INT,
    Sell_Rating INT
);