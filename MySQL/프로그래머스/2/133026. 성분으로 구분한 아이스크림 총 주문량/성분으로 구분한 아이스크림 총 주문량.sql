-- 코드를 입력하세요
select
    i.INGREDIENT_TYPE,
    sum(f.TOTAL_ORDER) as TOTAL_ORDER
from ICECREAM_INFO i join FIRST_HALF f on i.FLAVOR = f.FLAVOR
group by INGREDIENT_TYPE
order by TOTAL_ORDER