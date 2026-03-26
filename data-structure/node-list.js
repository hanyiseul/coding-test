// 노드 생성 함수: 데이터와 next 포인터를 가진 객체 반환
const createNode = (data) => ({
  data: data,
  next: null
});

// 연결 리스트 초기 상태 (Head가 비어있음)
let myLinkedList = { head: null, size: 0 };

console.log("--- 리스트 초기화 완료 ---");
console.log(myLinkedList);

// 맨 앞에 삽입 (Prepend): O(1)
function insertAtFront(list, data) {
  const newNode = createNode(data);
  newNode.next = list.head; // 새 노드가 기존 head를 가리킴
  list.head = newNode;      // head를 새 노드로 교체
  list.size++;
  console.log(`[삽입] 맨 앞에 ${data} 추가 완료`);
}

// 맨 뒤에 삽입 (Append): O(n)
// 맨 마지막이 null이면 끝 -> 탐색이 좀 걸림
function insertAtBack(list, data) {
  const newNode = createNode(data);
  if (!list.head) {
    list.head = newNode;
  } else {
    let curr = list.head;
    while (curr.next) { curr = curr.next; } // 끝까지 탐색
    curr.next = newNode;
  }
  list.size++;
  console.log(`[삽입] 맨 뒤에 ${data} 추가 완료`);
}

insertAtFront(myLinkedList, "노드1");
insertAtBack(myLinkedList, "노드2");
insertAtBack(myLinkedList, "노드3");

function findNode(list, targetData) {
  let curr = list.head;
  let index = 0;
  
  while (curr) { // 끝까지 가거나 리턴을 찾으면 종료
    if (curr.data === targetData) {
      console.log(`[탐색 성공] '${targetData}'를 인덱스 ${index}에서 찾았습니다.`);
      return curr;
    }
    curr = curr.next;
    index++;
  }
  console.log(`[탐색 실패] '${targetData}'가 리스트에 없습니다.`);
  return null;
}

findNode(myLinkedList, "노드2");
findNode(myLinkedList, "노드99"); // 실패 케이스

function deleteNode(list, targetData) {
  if (!list.head) return;

  // 1. 삭제할 대상이 Head일 때
  if (list.head.data === targetData) {
    list.head = list.head.next;
    list.size--;
    console.log(`[삭제] Head 노드 '${targetData}' 삭제 완료`);
    return;
  }

  // 2. 삭제할 대상의 이전 노드(prev) 찾기
  let prev = list.head;
  while (prev.next && prev.next.data !== targetData) {
    prev = prev.next;
  }

  // 3. 연결 변경 (건너뛰기)
  if (prev.next) {
    prev.next = prev.next.next;
    list.size--;
    console.log(`[삭제] 중간 노드 '${targetData}' 삭제 완료`);
  } else {
    console.log(`[삭제 실패] '${targetData}'를 찾을 수 없습니다.`);
  }
}

deleteNode(myLinkedList, "노드2"); // 중간 삭제


function printList(list) {
  let curr = list.head;
  let result = "Head -> ";
  
  while (curr) {
    result += `[${curr.data}] -> `;
    curr = curr.next;
  }
  
  result += "null";
  console.log("--- 현재 리스트 상태 ---");
  console.log(result);
  console.log(`총 노드 개수: ${list.size}`);
}

printList(myLinkedList);