arr = [11,3,28,43,9,2]
N=6
for i in  range(N-1):
    #i번째 올 친구 찾기
    minIdx = i # i부터 해서 끝까지 중에 가장 작은 값의 위치를 저장할 변수
    for j in range(i+1, N): # i의 다음부터 끝까지 중에 
      if arr[j] < arr[minIdx]: # 더 작은 변수가 나타날 경우
        minIdx = j # 그 자리 위치 저장

    arr[minIdx], arr[i] = arr[i], arr[minIdx]
print(arr)