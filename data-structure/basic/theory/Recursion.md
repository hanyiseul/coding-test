# 재귀 함수
- 함수가 자기 자신 함수를 호출하는 프로그래밍 기법
- 분할 정복, 탐색에 많이 사용
- 연습문제 1: 실행 결과
```python
def rec(num):
  if num <= 0:
    return
  print(num, end=" ")
  rec(num - 1)
rec(3)
```

## 주의할 점
- 파이썬 기본 재귀함수 깊이 : 1,000
- 재귀함수 깊이 제한 유의
- 다음 코드로 깊이 제한을 조정할 수 있음(무한으로 사용할 수 있는 건 아님, 보통 최대 100만)
  ```
  import sys
  sys.setrecursionlimit(10000)
  ```
- C++(vs기반): 스택 메모리 1MB(1,048,576 bytes)
- JAVA(JVM): 스택 메모리 1MB ~ 2MB