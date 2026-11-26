-- 코드를 입력하세요
select BOOK_ID,
       PUBLISHED_DATE
from BOOK
where CATEGORY = '인문'
  and date_format(PUBLISHED_DATE, '%Y') = '2021'
order by PUBLISHED_DATE asc;