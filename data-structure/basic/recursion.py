# 연습문제 1
def rec(num):
  if num <= 0:
    return
  print(num, end=" ")
  rec(num - 1)
rec(3)

print()

# 연습문제 2
def rec(num):
  if num <= 0:
    return
  rec(num - 1)
  rec(num - 1)
  print(num, end=" ")
rec(3)

print()

# 연습문제 3
def rec(num):
  if num <= 0:
    return
  rec(num - 1)
  print(num, end=" ")
  rec(num - 1)
rec(3)

print()

# 연습문제 4
def rec(num):
  if num <= 0:
    return
  rec(num - 1)
  rec(num - 2)
  rec(num - 3)
  print(num, end=" ")
rec(4)