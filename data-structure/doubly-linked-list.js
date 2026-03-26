// [단계 1] 노드 생성 함수 정의
const createNode = (data) => ({ 
  data, 
  next: null 
});

// [단계 2] 리스트 초기 상태 설정
let list = { 
  head: null, 
  size: 0 
};

// [단계 3] 초기 상태 출력 확인
console.log("--- [초기화 상태] ---");
console.log("리스트 객체:", list);
console.log("Head 연결 여부:", list.head === null ? "비어 있음" : "연결됨");
console.log("현재 크기:", list.size);

// [실행 전] 이중 연결 리스트 초기 리스트: { head: null, tail: null, size: 0 }

const createDoublyNode = (data) => ({
  data,
  prev: null, // 이전 노드 참조 추가
  next: null
});

// 이중 연결 리스트 삽입 예시 (가장 앞)
function prependDoubly(list, data) {
  const newNode = createDoublyNode(data);
  
  if (!list.head) {
    list.head = newNode;
    list.tail = newNode; // 노드가 하나면 head이자 tail
  } else {
    newNode.next = list.head;
    list.head.prev = newNode; // 기존 head의 이전 노드로 새 노드 지정
    list.head = newNode;
  }
  list.size++;

  console.log(`[Doubly-Prepend] '${data}' 삽입 후 상태:`, JSON.stringify(list, null, 2));
}

// 실행 예시 및 출력
prependDoubly(list, "이중데이터1");
/* 출력: {
  "head": {
    "data": "이중데이터1",
    "prev": null,
    "next": null
  },
  "tail": { ... 동일 노드 참조 ... },
  "size": 1
}
*/

// [실행 전] 상황: nodeA <-> nodeB (연결된 상태)

const nodeA = createDoublyNode("데이터1");
const nodeB = createDoublyNode("데이터2");

function insertBetween(nodeA, nodeB, data) {
  const newNode = createDoublyNode(data);

  // A와 B 사이에 NEW를 넣는 핵심 로직
  newNode.next = nodeB;   // 1. 새 노드의 다음을 B로
  newNode.prev = nodeA;   // 2. 새 노드의 이전을 A로
  nodeA.next = newNode;   // 3. A의 다음을 새 노드로
  nodeB.prev = newNode;   // 4. B의 이전을 새 노드로

  console.log(`[InsertBetween] '${nodeA.data}'와 '${nodeB.data}' 사이에 '${data}' 삽입 완료`);
  console.log(`결과 구조: ${nodeA.data} <-> ${newNode.data} <-> ${nodeB.data}`);
}

// 실행 예시 및 출력
// (nodeA: "데이터1", nodeB: "데이터2"가 있다고 가정)
insertBetween(nodeA, nodeB, "NEW");

/* 출력:
[InsertBetween] '데이터1'와 '데이터2' 사이에 'NEW' 삽입 완료
결과 구조: 데이터1 <-> NEW <-> 데이터2
*/

// [배열의 성능 측정] 데이터 10만 개를 맨 앞에 삽입할 때

const arr = [];

console.time('Array unshift'); // 타이머 시작

for (let i = 0; i < 100000; i++) {
  arr.unshift(i); // 기존 인덱스 10만 개를 매번 뒤로 밀어냄 (O(n))
}

console.timeEnd('Array unshift'); // 타이머 종료 및 소요 시간 출력

/* 출력 예시 (시스템 환경에 따라 다름):
Array unshift: 2542.123ms
- 설명: 배열은 새로운 요소를 맨 앞에 넣을 때마다 기존의 모든 요소(최대 10만 개)를 
  메모리상에서 한 칸씩 뒤로 이동시켜야 하므로 데이터가 많아질수록 기하급수적으로 느려집니다.
*/

// [연결 리스트의 성능 측정] 데이터 10만 개를 맨 앞에 삽입할 때

let myList = { head: null };

console.time('List prepend'); // 타이머 시작

function prepend(list, data) {
  const newNode = createNode(data);
  newNode.next = list.head;
  list.head = newNode;
  list.size++;
}

for (let i = 0; i < 100000; i++) {
  prepend(myList, i); // 참조값 1개(head)만 바꾸고 끝냄 (O(1))
}

console.timeEnd('List prepend'); // 타이머 종료 및 소요 시간 출력

/* 출력 예시 (시스템 환경에 따라 다름):
List prepend: 3.456ms
- 설명: 연결 리스트는 데이터가 10만 개든 1억 개든, 
  단순히 새 노드의 next를 기존 head에 연결하고 head를 교체하는 작업만 수행하므로 
  배열(unshift)에 비해 압도적으로 빠른 성능을 보여줍니다.
*/

// 연결 리스트 기반 queue의 dequeue
// [실행 전] 초기 상태: { "head": { "data": "데이터2", "next": { "data": "데이터3", "next": null } }, "size": 2 }

function dequeue(list) {
  if (!list.head) return null;
  
  const removedData = list.head.data;
  list.head = list.head.next; // 1. 맨 앞 노드(Head)를 버리고 다음 노드를 새로운 Head로 지정
  list.size--;                // 2. 리스트 크기 감소
  
  console.log(`[dequeue] '${removedData}' 추출 완료. 새로운 Head: ${list.head ? list.head.data : 'null'}`);
  return removedData;
}

// 실행 예시 및 출력
const data = dequeue(list);
/* 출력:
[dequeue] '데이터2' 추출 완료. 새로운 Head: 데이터3
최종 리스트 상태: { "head": { "data": "데이터3", "next": null }, "size": 1 }
- 설명: 연결 리스트를 활용한 큐(Queue)에서 dequeue는 
  단순히 head의 참조만 다음으로 옮기면 되므로 O(1)의 성능을 유지합니다.
*/