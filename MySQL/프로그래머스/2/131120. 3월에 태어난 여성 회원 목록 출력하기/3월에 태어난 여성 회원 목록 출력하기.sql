-- 코드를 입력하세요
select
    MEMBER_ID,
    MEMBER_NAME,
    GENDER,
    DATE_OF_BIRTH
from MEMBER_PROFILE 
where GENDER = "W" and month(DATE_OF_BIRTH) = 3 and TLNO is not null
order by MEMBER_ID;