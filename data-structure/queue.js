// 큐 예제 1: 기본 Enqueue & Dequeue
const queue = [];

// 1. 데이터 삽입 (Enqueue)
queue.push("작업 1");
queue.push("작업 2");
queue.push("작업 3");

console.log(queue);

// 2. 데이터 추출 (Dequeue)
const task = queue.shift();

console.log(`처리된 작업: ${task}`); // 처리된 작업: 작업 1
console.log(`현재 큐 상태: ${queue}`); // ['작업 2', '작업 3']

// 큐 예제 2: 인쇄 요청 처리
const printQueue = [];

// 1. 문서 인쇄 요청 발생
printQueue.push('보고서.pdf');
printQueue.push('사진.jpg');
printQueue.push('계약서.docx');

// 2. 순차적 인쇄 시작
while (printQueue.length > 0) {
  const document = printQueue.shift();
  console.log(`${document} 인쇄 중...`);
}
console.log(`대기열 비었음: ${printQueue}`); // [] 이 형식을 기억하고 명령대기 출력없음


// 큐 예제 3: 입장 대기 시스템
const waitingList = ['손님 A', '손님 B'];

// 1. 새로운 팀 도착
waitingList.push('손님 C');

// 2. 테이블 비었을 때 입장 처리
const currentGuest = waitingList.shift();

console.log(`${currentGuest}님 입장하세요.`); // 손님 A님 입장하세요.
console.log(`현재 남은 대기팀: ${waitingList}`); // ['손님 B', '손님 C'] 이 형식을 기억하고 명령대기 출력없음

// 큐 예제 4: 객체를 활용한 효율적 큐 (O(1) 구현)
class SimpleQueue {
  constructor () {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.storage[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const item = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return item;
  }
}

const fastQueue = new SimpleQueue();
fastQueue.enqueue('데이터 1');
fastQueue.enqueue('데이터 2');

console.log(`추출 데이터: ${fastQueue.dequeue()}`); 



// 큐 예제 5: 비동기 작업 대기열
const taskQueue = [];

// 비동기 작업 완료 순서대로 큐에 담김
taskQueue.push(() => console.log("첫 번째 콜백 실행"));
taskQueue.push(() => console.log("두 번째 콜백 실행"));

// 이벤트 루프가 큐에서 하나씩 꺼내어 실행
while (taskQueue.length > 0) {
    const callback = taskQueue.shift();
    callback();
}

console.log(`모든 태스크 완료: ${taskQueue}`); // [] 이 형식을 기억하고 명령대기 출력없음



/****************************************************************************************/

// 문제 1. 큐(Queue): 요세푸스 문제 (순환 대기열)
//  ['김', '이', '박', '최', '정'] 5명이 원형으로 앉아있습니다. 1번부터 시작하여 매 3번째 사람을 명단에서 제외합니다. 
// 마지막까지 남는 사람의 이름을 반환하세요.

const testCode = (arr, code) => {
  const queue = [...arr];
  let result;
  while (queue.length > 1) {
    for(let i = 0; i < code-1; i++) {
      result = queue.shift();
      queue.push(result);
    }
     queue.shift();
  }
  return queue[0]
}

console.log("['김', '이', '박', '최', '정'] :", testCode(['김', '이', '박', '최', '정'], 3));



// 문제 2. 큐(Queue): 우선순위 프린터
// 인쇄 대기열에 [중요도, 이름] 형태의 데이터가 있습니다. 
// 현재 큐의 맨 앞 문서보다 중요도가 높은 문서가 뒤에 하나라도 있으면, 맨 앞 문서를 꺼내어 다시 맨 뒤로 보냅니다. 
// 특정 인물의 문서가 몇 번째로 인쇄되는지 구하세요.

const testCode2 = (arr,target) => {
  console.log(arr)
  const queue = [...arr]
  let count = 0;

  while (queue.length > 0) {
  let check = false;
    const current = queue.shift();
    for(let i = 0; i < queue.length; i++) {
      if(queue[i][0] > current[0]) {
        check = true;
        break;
      }
    }

    if(check) {
      queue.push(current)
    } else {
      count++;
      if(current[1] === target) {
        return count
      }
    }
  }
}

console.log(testCode2([[2,'김'],[1,'이'],[3,'박'],[2,'최']], "김"));