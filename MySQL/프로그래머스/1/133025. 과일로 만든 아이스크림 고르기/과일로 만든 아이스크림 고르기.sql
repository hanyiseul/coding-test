-- 코드를 입력하세요
select flavor
from FIRST_HALF 
where TOTAL_ORDER > 3000 
    AND FLAVOR IN (
    select FLAVOR
    from ICECREAM_INFO  
    where INGREDIENT_TYPE = "fruit_based"
)
order by TOTAL_ORDER desc;


