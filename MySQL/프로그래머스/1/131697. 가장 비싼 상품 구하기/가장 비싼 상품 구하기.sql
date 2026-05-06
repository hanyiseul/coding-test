-- 코드를 입력하세요
select
    max(PRICE) as MAX_PRICE
from PRODUCT
order by PRICE desc
limit 1
