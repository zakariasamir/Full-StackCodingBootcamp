-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en-US'
--     LC_CTYPE = 'en-US'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- 1
select * from customer;

-- 2
select concat(first_name, ' ', last_name) as full_name from customer;

-- 3
select DISTINCT create_date from customer;

-- 4
select * from customer order by first_name desc;

-- 5
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;

-- 6
select address, phone from address where district = 'Texas';

-- 7
select * from film where film_id = 50 or film_id = 150;

-- 8
select film_id, title, description, length, rental_rate from film where title = 'Inception';

-- 9
select film_id, title, description, length, rental_rate from film where title like 'In%';

-- 10
select film_id, title, rental_rate from film order by rental_rate asc limit 10;

-- 11
select film_id, title, rental_rate from film f1 
where (select count(*) from film f2 where f2.rental_rate < f1.rental_rate) >= 10 
order by rental_rate asc limit 10;

-- 12
select c.first_name, c.last_name, p.amount, p.payment_date 
from customer c 
join payment p on c.customer_id = p.customer_id 
order by c.customer_id asc;

-- 13
SELECT * FROM film WHERE film_id NOT IN (SELECT DISTINCT film_id FROM inventory);

-- 14
SELECT city.city, country.country FROM city JOIN country ON city.country_id = country.country_id;

-- 15
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id 
FROM customer c JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id ASC;
















