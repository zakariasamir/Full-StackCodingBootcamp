-- Q-1
select name from language

-- Q-2
select 
    f.title as film_title, 
    f.description, 
    l.name as language_name
from language l
join film f on l.language_id = f.language_id

-- Q-3
select 
    f.title as film_title, 
    f.description, 
    l.name as language_name
from language l
left join film f on l.language_id = f.language_id

-- Q-4
create table new_film (
id serial primary key,
name varchar(100) not null
)

insert into new_film (name) values 
('Inception'),
('The Matrix'),
('Interstellar'),
('The Godfather'),
('The Dark Knight');

-- Q-5
create table customer_review (
    review_id serial primary key,
    film_id int not null,
    language_id int not null,
    title varchar(100) not null,
    score int check (score between 1 and 10),
    review_text text,
    last_update timestamp default now(),

    constraint fk_customer_review_film foreign key (film_id) 
        references new_film(id) on delete cascade,

    constraint fk_customer_review_language foreign key (language_id) 
        references language(language_id)
);

-- Q-6
insert into customer_review (film_id, language_id, title, score, review_text)
values 
(1, 1, 'Amazing Movie!', 9, 'One of the best films I have ever seen.'),
(2, 2, 'Mind-blowing!', 10, 'Absolutely loved it! Highly recommend.');

-- Q-7
delete from new_film where id = 2

select * from customer_review



















