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

// [단계 3] 초기 상태 출력 확인
console.log("--- [초기화 상태] ---");
console.log("리스트 객체:", list);
console.log("Head 연결 여부:", list.head === null ? "비어 있음" : "연결됨");
console.log("현재 크기:", list.size);

// [실행 전] 초기 상태: { head: null, size: 0 }

function prepend(list, data) {
  const newNode = createNode(data);
  newNode.next = list.head; // 새 노드가 기존 head를 가리킴
  list.head = newNode;      // head를 새 노드로 교체
  list.size++;
  
  console.log(`[prepend] '${data}' 삽입 후 리스트 상태:`, JSON.stringify(list, null, 2));
}

// 실행 예시 및 출력
prepend(list, "데이터1");
// 출력: { "head": { "data": "데이터1", "next": null }, "size": 1 }

prepend(list, "데이터2");
// 출력: { "head": { "data": "데이터2", "next": { "data": "데이터1", "next": null } }, "size": 2 }

// [실행 전] 초기 상태: { head: { data: '데이터2', next: { data: '데이터1', next: null } }, size: 2 }

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

  console.log(`[append] '${data}' 삽입 후 리스트 상태:`, JSON.stringify(list, null, 2));
}

// 실행 예시 및 출력
append(list, "데이터3");
/* 출력: {
  "head": {
    "data": "데이터2",
    "next": {
      "data": "데이터1",
      "next": {
        "data": "데이터3",
        "next": null
      }
    }
  },
  "size": 3
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
remove(list, "데이터1");
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
remove(list, "데이터1");
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




/****************************************************************************************/

// 1. 단일 연결 리스트: 마지막 인원 확인 (Tail 탐색)
// 연결 리스트 형태로 줄을 서 있는 명단이 주어집니다. 각 노드는 다음 사람을 가리킵니다. 명단의 가장 마지막에 서 있는 사람의 이름을 찾아내는 함수를 작성하세요.


{
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
    newNode.next = list.head;
    list.head = newNode;  
    list.size++;
  }
  function append(list, data) {
    const newNode = createNode(data);
    if (!list.head) {
      list.head = newNode;
    } else {
      let current = list.head;
      while (current.next) { current = current.next; } 
      current.next = newNode;
    }
    list.size++;
  }
  
  prepend(list, "철수")
  append(list, "영희")
  append(list, "민수")

  let current = list.head;

  while (current.next !== null) { // next가 null이 아닐때까지
    current = current.next; // 다음 next로 이동
  }

  console.log(current.data);
}




/****************************************************************************************/

// 2. 단일 연결 리스트: 중간 새치기 (Node 삽입)
// nodeA와 nodeB가 연결되어 있습니다. 두 사람 사이에 새로운 사람(newNode)이 새치기를 하려고 합니다. 
// 연결 관계를 수정하여 nodeA -> newNode -> nodeB가 되도록 만드세요.

const node = (data) => ({
  data,
  next: null
})

const nodeA = node("앞사람");
const nodeB = node("기존뒷사람");

const insertBetween = (nodeA, nodeB, data) => {
  const newNode = node(data);

  newNode.next = nodeB;
  newNode.prev = nodeA;

  nodeA.next = newNode;
  nodeB.prev = newNode;
 
  console.log(nodeA.next.data)
  console.log(nodeA.next.next.data);
}
insertBetween(nodeA, nodeB, "새치기객");





/****************************************************************************************/

// 3. 단일 연결 리스트: 명단 합산 (전체 탐색)
// 각 노드에 숫자가 적힌 쪽지를 들고 사람들이 서 있습니다. head부터 시작하여 마지막 사람까지 이동하며 모든 쪽지에 적힌 숫자의 총합을 구하세요.

{
  function createDoublyNode(data) {
    return {
      data: data,
      next: null,
      prev: null
    };
  }

  const nodeA = createDoublyNode("데이터1");
  const nodeB = createDoublyNode("데이터2");

  nodeA.next = nodeB;
  nodeB.prev = nodeA;

  function insertBetween(nodeA, nodeB, data) {
    const newNode = createDoublyNode(data);

    // A와 B 사이에 NEW를 넣는 핵심 로직
    newNode.next = nodeB;   // 1. 새 노드의 다음을 B로
    newNode.prev = nodeA;   // 2. 새 노드의 이전을 A로
    nodeA.next = newNode;   // 3. A의 다음을 새 노드로
    nodeB.prev = newNode;   // 4. B의 이전을 새 노드로

    console.log(`[InsertBetween] '${nodeA.data}'와 '${nodeB.data}' 사이에 '${data}' 삽입 완료`);
    console.log(`결과 구조: ${nodeA.data} <-> ${newNode.data} <-> ${nodeB.data}`);
    
    return newNode; // 이후 참조를 위해 반환
  }

  // 4. 실행
  insertBetween(nodeA, nodeB, "NEW");
}

{
  const createNode = (data) => ({ 
    data, 
    next: null 
  });

  let list = { 
    head: null,
    size: 0 
  };

  function prepend(list, data) { // 첫번째 노드 생성
    const newNode = createNode(data);
    newNode.next = list.head;
    list.head = newNode;  
    list.size++;
  }
  function append(list, data) { // 새 노드 추가
    const newNode = createNode(data);
    if (!list.head) {
      list.head = newNode;
    } else {
      let current = list.head;
      while (current.next) { current = current.next; } 
      current.next = newNode;
    }
    list.size++;
  }
  prepend(list, 10)
  append(list, 20)
  append(list, 30)

  let current = list.head
  let total = 0;

  while (current !== null) { // current가 끝날때까지
    total += current.data; // total에 data값 더해주고
    current = current.next; // 다음 next로 이동
  }

  console.log(total);
}