-- 코드를 입력하세요
select 
    count(*) as USERS
from USER_INFO
where YEAR(JOINED) = 2021 and age between 20 and 29;