// 덱 예제 1 : 양방향 삽입과 삭제
const deque = ['data2', 'data3'];

// 1. 앞쪽에 추가 (Unshift) & 뒤쪽에 추가 (Push)
deque.unshift('data1');
deque.push('data4');

console.log("deque", deque);

// 2. 앞쪽에서 제거 (Shift) & 뒤쪽에서 제거 (Pop)
const frontItem = deque.shift() // 'data1'
const rearItem = deque.pop(); // 'data4'

console.log(`앞/뒤 제거 결과: ${frontItem}, ${rearItem}`);
console.log(`현재 덱 상태: ${deque}`); // ['Data2', 'Data3'] 이 형식을 기억하고 명령대기 출력없음


// 덱 예제 2: 최근 항목 리스트
const recentView = ['상품a', '상품b', '상품c'];
const max_size = 3;

// 1. 새로운 상품 '상품D'를 확인 (최상단 노출)
recentView.unshift('상품d');

// 2. 최대 개수 초과 시 가장 오래된 마지막 항목 제거
if(recentView.length > max_size) {
  const oldItem = recentView.pop();
  console.log(`${oldItem}`);
}

console.log(`${recentView}`);


// 덱 예제 3: 실시간 데이터 윈도우
const dataWindow = [10, 20, 30]; // 현재 수집된 값

// 1. 새로운 데이터 '40' 유입 (Push)
dataWindow.push(40);

// 2. 윈도우 범위를 벗어난 가장 오래된 데이터 제거 (Shift)
const expiredData = dataWindow.shift();

console.log(`만료된 데이터: ${expiredData}`); // 10
console.log(`현재 활성 데이터: ${dataWindow}`); // [20, 30, 40] 이 형식을 기억하고 명령대기 출력없음


// 덱 예제 4 : 우선 순위 알림 큐
const alerts = ['일반공지1', '일반공지2'];

// 1. 긴급 재난 문자 발생 (앞으로 삽입)
alerts.unshift ('긴급: 서버 점검 예정');

// 2. 알림 확인 (앞에서부터 처리)
const currentAlert = alerts.shift();

console.log(`처리 중인 알림: ${currentAlert}`); // 긴급: 서버 점검 예정
console.log(`남은 알림: ${alerts}`); // ['일반공지1', '일반공지2'] 이 형식을 기억하고 명령대기 출력없음


// 덱 예제 5 : 작업 이력 관리
const taskHistory = ["그리기", "지우기"];

// 1. 새로운 작업 '색칠하기' 추가
taskHistory.push("색칠하기");

// 2. 너무 오래된 작업 로그는 메모리 절약을 위해 앞에서부터 제거
if(taskHistory.length > 2) {
  taskHistory.shift();
}
console.log(`최근 작업 이력: ${taskHistory}`); // 최근 작업 이력: 지우기,색칠하기




/****************************************************************************************/

// 문제 1. 덱(Deque): 슬라이딩 윈도우 최대 점수
//  연속된 3일간의 방문자 수 [10, 20, 10, 30, 20]가 주어집니다. 덱을 사용하여 구간(크기 3) 이동 시 가장 큰 방문자 수 합계를 구하세요.


const testCode = (arr, code) => {
  const deque = [];
  let max = 0;
  let current = 0;

  for(let i = 0; i < arr.length; i++) {
      deque.push(arr[i]);
      current += arr[i]

      if(deque.length > code) {
        current -= deque.shift();
      } 
      if(deque.length === code) {
        max = Math.max(max, current);
      }
  }
  return max;
}

console.log("[10, 20, 10, 30, 20] : ", testCode([10, 20, 10, 30, 20], 3))



