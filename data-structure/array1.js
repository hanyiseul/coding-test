// 1. Array: Cinema Waiting Queue (배열의 추가와 제거)

// 배열 연습 : 선입선출 (FIFO) -> 큐
const waitingQueue = ["철수", "영희", "민수"];

// 1. 새로운 관객 철수가 대기열 맨 뒤에 도착(push)
waitingQueue.push("철민");

// 2. 가장 앞에 있던 관객 철수가 영화관에 입장(shift)
const attendee = waitingQueue.shift();

//  테스트
console.log(`현재 입장객: ${attendee}`); // 현재 입장객: 철수
console.log(`남은 대기열: ${waitingQueue}`); // ["영희", "민수", "철민"]

/****************************************************************************************/

// 2. Array: Product Price Filtering 

// 배열 연습: 데이터 필터링 및 가공
const productList = [
  { name: 'Keyboard', price: 30000, owner: 'Chulsoo' },
  { name: 'Monitor', price: 200000, owner: 'Minsoo' },
  { name: 'Mouse', price: 15000, owner: 'Younghee' },
  { name: 'Headset', price: 80000, owner: 'Chulmin' }
];

// 가격이 50,000원 이상인 상품의 소유자 이름만 추출
const expensiveItems = productList
  .filter(item => item.price >= 50000) // 조건에 맞는 객체들만 골라냄
  .map(item => item.owner);           // 객체에서 owner 이름만 뽑아 새 배열 생성

console.log("expensiveItems", expensiveItems); // ['Minsoo', 'Chulmin']



/****************************************************************************************/


// 3. Object: Election Vote Counter (객체를 활용한 빈도수 계산)

// 객체 연습: 빈도수 측정 (해시 맵 패턴)
const voteRecords = ['Chulsoo', 'Minsoo', 'Chulsoo', 'Younghee', 'Minsoo', 'Chulsoo']; // 자료구조
const voteCounter = {};

for (let name of voteRecords) {
  // 이미 객체에 이름이 있다면 1을 더하고, 없다면 1로 시작
  if (voteCounter[name]) {
    voteCounter[name] += 1;
  } else {
    voteCounter[name] = 1;
  }
}

console.log("voteCounter", voteCounter); 
// 출력 결과: { 'Chulsoo': 3, 'Minsoo': 2, 'Younghee': 1 }


/****************************************************************************************/


//4. Set: Unique Guest List (중복 제거와 존재 확인)

// Set 연습: 중복 데이터 제거 및 존재 여부 확인
const guestArrivals = ['Minsoo', 'Chulmin', 'Minsoo', 'Younghee', 'Chulmin', 'Dongglei'];

// 1. 중복된 이름을 자동으로 제거하여 집합 생성
const uniqueGuests = new Set(guestArrivals);

// 2. 중복이 제거된 실제 방문객 수 확인
console.log(`실제 방문객 수: ${uniqueGuests.size}`); // 4
console.log(`실제 방문객: ${uniqueGuests}`); // [object Set] : set은 배열처럼 문자열로 자동 변환 되지 않는 객체
console.log(`실제 방문객:`, uniqueGuests ); // Set(4) { 'Minsoo', 'Chulmin', 'Younghee', 'Dongglei' }
console.log(`실제 방문객: ${[...uniqueGuests]}`); // Minsoo,Chulmin,Younghee,Dongglei : 템플릿 문자열 안에 들어가기 때문에 문자열로 변환
console.log(`실제 방문객 스프레드:`, [...uniqueGuests] ); // [ 'Minsoo', 'Chulmin', 'Younghee', 'Dongglei' ] : Spread 연산자 (...)를 사용해서 Set 안의 값을 하나씩 꺼내 배열에 펼치는 것
console.log(`실제 방문객:`, Array.from(uniqueGuests) ); // [ 'Minsoo', 'Chulmin', 'Younghee', 'Dongglei' ] : 배열이 아닌 것을 배열로 변환하는 함수

// 3. 'Chulsoo'라는 이름이 명단에 있는지 확인 (매우 빠름)
console.log("uniqueGuests.has('Chulsoo')", uniqueGuests.has('Chulsoo')); // false
console.log("uniqueGuests.has('Dongglei')", uniqueGuests.has('Dongglei')); // true


/****************************************************************************************/

// 5. Map: Employee Phone Directory (키-값 쌍 관리)

// Map 연습: 키-값 쌍의 효율적 관리
const employeeDirectory = new Map(); // new Map(); : Map 자료구조를 하나 만든 것

// 1. 직원 정보 등록 (이름을 키로, 번호를 값으로 저장)
// employeeDirectory.set(key, value) : Map에 데이터를 추가하거나 수정하는 것
employeeDirectory.set('Chulmin', '010-1111-2222');
employeeDirectory.set('Younghee', '010-3333-4444');
employeeDirectory.set('Minsoo', '010-5555-6666');

// 2. 이름으로 전화번호 즉시 찾기 
// employeeDirectory.get(key) : key에 해당하는 value값 가져옴
const searchName = 'Younghee'; //  영희 : 키
const phoneNumber = employeeDirectory.get(searchName); // Map에서 특정 key에 해당하는 값을 가져와서 phoneNumber 변수에 저장하는 것
console.log(`${searchName}의 번호: ${phoneNumber}`);

// 3. 퇴사한 직원 정보 삭제 및 전체 인원 확인
// size : 데이터 개수
employeeDirectory.delete('Chulmin');
console.log(`현재 재직 인원: ${employeeDirectory.size}`); // 2

// has()  key 존재 확인
console.log("has", employeeDirectory.has('Chulmin'));


/****************************************************************************************/

// 6. String & Array: Sentence Reverser (문자열 뒤집기)

// 문자열 연습: 단어 순서 뒤집기
const originalSentence = 'Minsoo Younghee Chulsoo';

// 1. split(' '): 공백을 기준으로 단어를 잘라 배열로 만듦
const wordsArray = originalSentence.split(' '); 

// 2. reverse() : 배열의 순서를 거꾸로 뒤집음
const reversedArray = wordsArray.reverse(); 

// 3. join(' ') : 배열 요소를 다시 공백으로 연결하여 문자열 생성
const finalResult = reversedArray.join(' ');

console.log(`원본: ${originalSentence}`); // 'Minsoo Younghee Chulsoo'
console.log(`결과: ${finalResult}`);     // 'Chulsoo Younghee Minsoo'


/****************************************************************************************/


// 7. Array (Stack): Undo Function (되돌리기 기능)

// 배열 연습: 스택(Stack)을 활용한 작업 취소
const actionHistory = [];

// 1. push() : 데이터 넣기 (데이터 쌓기 - 사용자가 수행한 작업들을 기록 (Push)
actionHistory.push('Typed: Minsoo');
actionHistory.push('Typed: loves');
actionHistory.push('Typed: JavaScript');

// 2. pop() : 마지막에 넣은 것부터 꺼냄 - 'Ctrl + Z' (실행 취소) 수행: 마지막 작업 제거 (Pop)
const lastAction = actionHistory.pop();

console.log(`취소된 작업: ${lastAction}`); // 'Typed: JavaScript'
console.log(`남은 기록: ${actionHistory}`); // ['Typed: Minsoo', 'Typed: loves']


/****************************************************************************************/

// 8. Array: Score Sorting (데이터 정렬)


// 배열 연습: 성적순 정렬 (내림차순)
const studentScores = [
  { name: 'Minsoo', score: 85 },
  { name: 'Chulmin', score: 92 },
  { name: 'Younghee', score: 78 }
];

// 점수(score)를 기준으로 큰 숫자가 앞으로 오게 정렬
// array.sort(비교함수) : 배열을 정렬하는 함수
// 오름차순 : studentScores.sort((a, b) => a.score - b.score);
// 내림차순 : studentScores.sort((a,b) => b.score - a.score);
studentScores.sort((a,b) => b.score - a.score); // 객체 배열을 score 기준으로 내림차순 정렬하는 코드

console.log('--- 성적 우수자 명단 ---');
studentScores.forEach((student, index) => {
  console.log(`${index + 1}등: ${student.name} (${student.score}점)`);
});


/****************************************************************************************/

// 9. Object: Key-Value Presence (데이터 유무 확인)

// 객체 연습: 회원 정보 조회 및 예외 처리
const memberRoles = {
  'Minsoo': 'Admin',
  'Younghee': 'Editor',
  'Chulmin': 'Guest'
};

const targetUser = 'Chulsoo';

// 해당 사용자가 객체에 존재하는지 확인
// memberRoles: 시퀀스 변수 (객체니까)
if (targetUser in memberRoles) { // in은 객체에 특정 key가 존재하는지 확인
  console.log(`${targetUser}님의 권한은 ${memberRoles[targetUser]}입니다.`);
} else {
  // 데이터가 없을 경우에 대한 처리 (코딩 테스트 필수 패턴)
  console.log(`${targetUser}님은 등록되지 않은 사용자입니다.`);
}


/****************************************************************************************/

// 10. Array: Find and Update (데이터 찾기 및 수정)

// 배열 연습: 특정 데이터 수정하기
const attendanceBook = [
  { name: 'Minsoo', present: true },
  { name: 'Chulmin', present: false },
  { name: 'Younghee', present: true }
];

// 지각했던 'Chulmin'이 도착하여 출석 상태를 변경함
// find() : 배열에서 조건에 맞는 첫 번째 요소를 찾는 함수
// array.find((value, index) => 조건)
const targetStudent = attendanceBook.find(students => students.name === 'Chulmin');

if (targetStudent) {
  targetStudent.present = true; // 데이터 업데이트
}

console.log('최종 출석부:', attendanceBook);
// Chulmin의 present 상태가 true로 변경됨



/****************************************************************************************/

// 문제 1: 중복 없는 명단과 인원수 구하기
// 이벤트 응모자 명단이 배열로 주어집니다. 
// 중복된 이름을 제거한 실제 응모자 명단(배열)과 총 몇 명인지를 출력하는 함수를 작성하세요.

const arr1 = ['Minsoo', 'Chulmin', 'Minsoo', 'Younghee', 'Chulmin']
const uniqueArr = new Set(arr1);

console.log(`명단: `, Array.from(uniqueArr) + `,` + `인원: `, uniqueArr.size);
console.log(`명단: `, [...uniqueArr], `, 인원: `, uniqueArr.size);


// 문제 2: 과일 바구니 개수 세기 (해시 맵)
// 바구니에 담긴 과일들의 이름이 배열로 주어집니다. 
// 각 과일이 몇 개씩 들어있는지 객체(Object) 형태로 정리하여 반환하는 함수를 작성하세요.

const arr2 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const arr2Counter = {};


for (let name of arr2) {
  // 이미 객체에 이름이 있다면 1을 더하고, 없다면 1로 시작
  if (arr2Counter[name]) {
    arr2Counter[name] += 1;
  } else {
    arr2Counter[name] = 1;
  }
}

console.log(arr2Counter); 

// 문제 3: 최고 점수 학생 찾기
// 학생 이름과 점수가 담긴 객체 배열이 주어집니다.
// 이 중 가장 높은 점수를 받은 학생의 이름을 출력하세요. 

const arr3 = [ { name: 'Minsoo', score: 80 }, { name: 'Chulmin', score: 95 }, { name: 'Younghee', score: 70 }]

const maxScore = arr3.reduce((max, item) => { // 누적값 : 이전 계산 결과를 다음 계산에 전달
  return item.score > max ? item.score : max
})

console.log("최고 득점자: ", maxScore.name)
