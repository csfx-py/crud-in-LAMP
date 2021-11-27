-- create db
CREATE DATABASE `information`;
-- create table
CREATE TABLE IF NOT EXISTS `student` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `address` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);
-- show records
SELECT *
FROM `student`;
-- insert record
INSERT INTO `student` (`first_name`, `last_name`, `address`, `email`)
VALUES (
        'first_name',
        'last_name',
        'address',
        'email'
    );
-- update record
UPDATE `student`
SET `first_name` = 'first_name',
    `last_name` = 'last_name',
    `address` = 'address',
    `email` = 'email'
WHERE `id` = 1;
-- delete record
DELETE FROM `student`
WHERE `id` = 1;