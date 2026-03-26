// [단계 1] 노드 생성 함수 정의
const createNode = (data) => ({ 
  data, 
  next: null 
});

// [단계 2] 리스트 초기 상태 설정
let list = { 
  head: null, // 갈데가 없어서 null
  size: 0 
};

function prepend(list, data) {
  const newNode = createNode(data);
  newNode.next = list.head; // 새 노드가 기존 head를 가리킴
  list.head = newNode;      // head를 새 노드로 교체
  list.size++;
  
  console.log("prepend.data: ", data);
}
prepend(list, 1)
function append(list, data) {
  const newNode = createNode(data);
  if (!list.head) {
    list.head = newNode;
  } else {
    let current = list.head;
    while (current.next) { current = current.next; } // 끝까지 이동 / 조건이 참일때 까지
    current.next = newNode;
  }
  list.size++;

  console.log("append.data:", data);
}
append(list, 2)
append(list, 3)
console.log("list: ", list)
console.log("list: ", JSON.stringify(list, null, 2))

function remove(list, data) {
  if (!list.head) return;
  
  if (list.head.data === data) {
    list.head = list.head.next; // 첫 번째 노드 건너뛰기
    list.size--;
    console.log(`[remove] Head 노드 '${data}' 삭제 후 리스트 상태:`, JSON.stringify(list, null, 2));
    return;
  }
  
  let curr = list.head;
  while (curr.next && curr.next.data !== data) { curr = curr.next; }
  
  if (curr.next) {
    curr.next = curr.next.next; // 참조 연결 끊기
    list.size--;
    console.log(`[remove] 중간/끝 노드 '${data}' 삭제 후 리스트 상태:`, JSON.stringify(list, null, 2));
  } else {
    console.log(`[remove 실패] '${data}'를 찾을 수 없습니다.`);
  }
}


// 실행 예시 및 출력
//remove(list, "데이터1");
/* 출력: {
  "head": {
    "data": "데이터2",
    "next": {
      "data": "데이터3",
      "next": null
    }
  },
  "size": 2
}
*/

// [실행 전] 초기 상태: { "head": { "data": "데이터2", "next": { "data": "데이터1", "next": { "data": "데이터3", "next": null } } }, "size": 3 }

function remove(list, data) {
  if (!list.head) return;
  
  if (list.head.data === data) {
    list.head = list.head.next; // 첫 번째 노드 건너뛰기
    list.size--;
    console.log(`[remove] Head 노드 '${data}' 삭제 후 리스트 상태:`, JSON.stringify(list, null, 2));
    return;
  }
  
  let curr = list.head;
  while (curr.next && curr.next.data !== data) { curr = curr.next; }
  
  if (curr.next) {
    curr.next = curr.next.next; // 참조 연결 끊기
    list.size--;
    console.log(`[remove] 중간/끝 노드 '${data}' 삭제 후 리스트 상태:`, JSON.stringify(list, null, 2));
  } else {
    console.log(`[remove 실패] '${data}'를 찾을 수 없습니다.`);
  }
}

// 실행 예시 및 출력
// remove(list, "데이터1");
/* 출력: {
  "head": {
    "data": "데이터2",
    "next": {
      "data": "데이터3",
      "next": null
    }
  },
  "size": 2
}
*/