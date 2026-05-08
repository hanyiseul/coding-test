-- 코드를 작성해주세요
select
    round(AVG(
        case
            when LENGTH <= 10 or LENGTH is null then 10
            else LENGTH
        end
    ), 2) as AVERAGE_LENGTH
from FISH_INFO 