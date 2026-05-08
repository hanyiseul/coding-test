-- 코드를 입력하세요
select 
    count(distinct NAME) as count
from ANIMAL_INS 
where NAME is not null or NAME like "*%"