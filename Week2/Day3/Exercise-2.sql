-- Q-1
update film set language_id = 4 where film_id=10
update film set language_id = 3 where film_id=51

-- Q-2
-- the store_id refers to the store table
-- the address_id refers to the address table
-- before we insert a new customer we need to make sure that the referenced values exist in the other tables

-- Q-3
-- drop table customer_review
-- it was easy because when we created the table we use the CASCADE This will also delete all related foreign key

-- Q-4
select count(*) as outstanding_rentals
from rental
where return_date is null;

-- Q-5
select f.film_id, f.title, f.rental_rate, r.rental_date
from rental r
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
where r.return_date is null
order by f.rental_rate desc
limit 30;

-- Q-6
-- 1
select f.film_id, f.title, f.description
from film f
join film_actor fa on f.film_id = fa.film_id
join actor a on fa.actor_id = a.actor_id
where a.first_name = 'Penelope' 
and a.last_name = 'Monroe'
and f.description ILIKE '%sumo%';

-- 2
select f.film_id, f.title, f.description
from film f
join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id
where c.name = 'Documentary'
and f.length < 60
and f.rating = 'R';

-- 3
select f.film_id, f.title, p.amount, r.return_date
from rental r
join payment p on r.rental_id = p.rental_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
join customer c on r.customer_id = c.customer_id
where c.first_name = 'Matthew'
and c.last_name = 'Mahan'
and p.amount > 4.00
and r.return_date between '2005-07-28' and '2005-08-01';

-- 4
select f.film_id, f.title, f.description, f.replacement_cost
from film f
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
join customer c on r.customer_id = c.customer_id
where c.first_name = 'Matthew' 
and c.last_name = 'Mahan'
and (f.title ilike '%boat%' or f.description ilike '%boat%')
order by f.replacement_cost desc
limit 1;

