-- Part I
-- 1
create table customer (
id serial primary key,
first_name varchar(50) not null,
last_name varchar(50) not null
);

create table customerProfile (
id serial primary key,
isLoggedIn boolean default false,
customer_id int unique references customer(id) on delete cascade
);

-- 2
insert into customer (first_name, last_name)
values
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- 3
insert into customerProfile (isLoggedIn, customer_id)
values
(true, (select id from customer where first_name = 'John')),
(false, (select id from customer where first_name = 'Jerome'))

-- 4
select c.first_name from customer c
join customerProfile cp on c.id = cp.customer_id
where cp.isLoggedIn = true;

select c.first_name, coalesce(cp.isloggedIn, false) as isLoggedIn
from customer c
left join customerProfile cp on c.id = cp.customer_id;

select count(*) as not_logged_in from customer c
left join customerProfile cp on c.id = cp.customer_id
where cp.isLoggedIn = false

-- Part II
-- 1
create table book (
book_id serial primary key,
title varchar(100) not null,
author varchar(100) not null
);

-- 2
insert into book (title, author)
values
	('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To Kill a Mockingbird', 'Harper Lee');

-- 3
create table student (
student_id serial primary key,
name varchar(100) not null unique,
age int check (age <= 15)
);

-- 4
insert into student (name, age)
values
	('John', 12),
    ('Lera', 13),
    ('Patrick', 10),
    ('Bob', 15);

-- 5
create table library (
book_fk_id int references book(book_id) on delete cascade on update cascade,
student_fk_id int references student(student_id) on delete cascade on update cascade,
borrowed_date date,
primary key (book_fk_id, student_fk_id)
);

-- 6
insert into library (book_fk_id, student_fk_id, borrowed_date)
values
	((select book_id from book where title = 'Alice In Wonderland'),
	(select student_id from student where name = 'John'),
	'2022-02-15'),
	((select book_id from book where title = 'To kill a Mockingbird'),
	(select student_id from student where name = 'Bob'),
	'2021-03-03'),
	((select book_id from book where title = 'Alice In Wonderland'),
	(select student_id from student where name = 'Lera'),
	'2021-05-23'),
	((select book_id from book where title = 'Harry Potter'),
	(select student_id from student where name = 'Bob'),
	'2021-08-12');

-- 7	
select * from Library

select b.title, s.name from library l
join student s on l.student_fk_id = s.student_id
join book b on l.book_fk_id = b.book_id

select avg(s.age) from library l
join student s on l.student_fk_id = s.student_id
join book b on l.book_fk_id = b.book_id
where b.title = 'Alice In Wonderland'


delete from student where name = 'Lera'
-- we have add cascade to the on delete that will also delete lera borrowed book from the junction table









