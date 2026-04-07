/**
 * BFS (너비 우선 탐색) - executeSQL
 *   - 가까운 순부터 탐색하여 최단 경로 탐색
 *   - 큐를 이용해 루트부터 루트-같은레벨노드(왼-오)-다음레벨노드(왼-오) 순으로 탐색
 *   - 빈 자리가 있을 경우 자리를 채워넣어 다음 레벨 탐색할 수 있게 함 (ex.97~98L)
 * 
 * DFS (깊이 우선 탐색) - printDirectoryTree
 *   - 깊이 우선으로 탐색
 *   - 루트 - 왼쪽 노드 쭉 (왼쪽탐색 끝) - 오른쪽 노드 쭉 순으로 탐색 
 *     (printDirectoryTree는 트리를 왼쪽에서 오른쪽으로 출력하기 때문에 오른쪽-루트-왼쪽 순으로 탐색 - 중위순회(왼쪽-루트-오른쪽)의 반대)
 *   - 재귀함수를 호출하여 루트 끝까지 탐색한 후 다음 탐색 실행
 */

// --- Base Structure ---
function createNode(value) { // 노드 생성 함수
  return {
    value: value, // 매개변수 삽입 위치
    left: null, // 기본값 null
    right: null // 기본값 null
  };
}

let root = createNode('루트 노드'); // 루트 삽입
root.left = createNode('왼쪽1 노드1'); // 왼쪽 첫번째 노드 삽입
root.right = createNode('오른쪽1 노드1'); // 오른쪽 첫번째 노드 삽입
root.left.left = createNode('왼쪽2 노드1'); // 왼쪽1 노드1 아래 왼쪽 노드 삽입
root.left.right = createNode('왼쪽2 노드1'); // 왼쪽1 노드1 아래 오른쪽 노드 삽입

// --- Directory Style Tree Visualization ---
// 트리 사전 출력 함수
function printDirectoryTree(node, prefix = "", isLeft = true) {  // 노드, 간선, 왼쪽여부
  if (!node) return; // 노드가 없으면 리턴

  if (node.right) { // 노드가 오른쪽일 경우
    printDirectoryTree(node.right, prefix + (isLeft ? "│   " : "    "), false); // 오른쪽노드, 왼쪽이면 | /아니면 공백, 왼쪽 아님 처리
  }

  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value); // 트리모양으로 출력

  if (node.left) { // 노드가 왼쪽일 경우
    printDirectoryTree(node.left, prefix + (isLeft ? "    " : "│   "), true); // 왼쪽노드, 왼쪽이면 | /아니면 공백, 왼쪽 맞음 처리
  }
}

// --- SQL Engine Emulation ---

function selectNode(target) { // 파라미터값 노드 조회 함수
  if (!root) return null; // 루트가 없을 경우 null 
  const queue = [root]; 
  while (queue.length > 0) { // 루트가 0보다 클 경우
    let node = queue.shift(); // 배열에 노드 삽입
    if (node.value === target) return node; // 노드 값과 현재 값이 동일할 경우 노드 반환
    if (node.left) queue.push(node.left); // 만일 노드가 왼쪽일 경우 큐에 노드 왼쪽으로 삽입
    if (node.right) queue.push(node.right); // 만일 노드가 오른쪽일 경우 큐에 노드 오른쪽으로 삽입
  }
  return null;
}

function executeSQL(action, params) { // 트리 구조 출력 함수
  console.log(`\n>> EXECUTING SQL: ${action} ${JSON.stringify(params)}`); // 콘솔 출력 : action + 데이터값

  // Before state
  if (action !== 'SELECT') { // 조회가 아닐 경우
    console.log(`[${action} BEFORE]`);
    printDirectoryTree(root); // 해당 함수실행 
  }

  switch (action) {
    case 'SELECT': // 트리 탐색일 경우
      console.log(`[SQL Log] SELECT * FROM address_book WHERE name_addr = '${params.target}';`); // 찾으려는 조회 쿼리문 출력
      const found = selectNode(params.target); // 찾으려는 값을 found에 저장
      console.log(found ? `   - Result: Found ${found.value}` : "   - Result: Not Found"); // found가 있을 경우 found.value값 출력 없으면 Not Found
      break;

    case 'INSERT': // 노드 삽입일 경우
      console.log(`[SQL Log] INSERT INTO address_book (name_addr) VALUES ('${params.value}');`); // 삽입할 쿼리문 출력
      const newNode = createNode(params.value); // 삽입할 노드 생성
      const queue = [root];
      while (queue.length > 0) { // 큐의 길이가 0보다 클 경우
        let node = queue.shift();  // 노드 변수에 큐의 제일 앞의 값 빼서 저장
        if (!node.left) { node.left = newNode; break; } // node.left가 없다면 node.left에 노드 삽입
        else queue.push(node.left); // 이미 있다면 큐에 node.left로 push
        if (!node.right) { node.right = newNode; break; } // node.right가 없다면 node.right에 노드 삽입
        else queue.push(node.right); // 이미 있다면 큐에 node.right로 push
      }
      break;

    case 'UPDATE': // 노드 수정일 경우
      console.log(`[SQL Log] UPDATE address_book SET name_addr = '${params.newValue}' WHERE name_addr = '${params.oldValue}';`); // 수정할 쿼리문 출력
      const targetNode = selectNode(params.oldValue); // targetNode에 수정할 노드 저장
      if (targetNode) targetNode.value = params.newValue; // 만약 targetNode가 있다면 targetNode.value를 새 값으로 수정
      break;

    case 'DELETE': // 노드 삭제일 경우
      console.log(`[SQL Log] DELETE FROM address_book WHERE name_addr = '${params.target}';`); // 삭제 쿼리문 출력
      // Enqueue : 큐에 데이터 저장하는거
      // Dequeue : 큐에 데이터 빼는거
      const dQueue = [root]; // dQueue에 루트 저장
      while (dQueue.length > 0) { // dQueue길이가 0보다 클 경우
        let node = dQueue.shift(); // dQueue 배열의 맨 앞 요소를 빼서 node 변수에 저장
        if (node.left && node.left.value === params.target) { node.left = null; break; } // node.left가 있고, node.left.value값이 삭제할 노드와 같다면 해당 노드는 null(삭제)
        if (node.right && node.right.value === params.target) { node.right = null; break; }// node.right가 있고, node.right.value값이 삭제할 노드와 같다면 해당 노드는 null(삭제)
        if (node.left) dQueue.push(node.left); // 삭제할 노드가 남았는지 왼쪽에서 탐색하기 위한 코드
        if (node.right) dQueue.push(node.right); // 삭제할 노드가 남았는지 오른쪽에서 탐색하기 위한 코드
      }
      break;
  }

  // After state
  if (action !== 'SELECT') {
    console.log(`[${action} AFTER]`);
    printDirectoryTree(root);
  }
  console.log("--------------------------------------------------");
}

// --- Scenario Execution ---
const readline = require('readline');

// 입출력 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => { // 터미널에서 입력 받을 수 있게 하는 노드 모듈 함수
  const input = line.trim(); 
  if (input === 'exit') { // exit 입력시 종료
    rl.close();
    return;
  }
  if (input.startsWith('INSERT')) { // insert 입력시 노드 추가
    const value = input.replace('INSERT', '').trim();
    executeSQL('INSERT', { value });
  }
  else if (input.startsWith('SELECT')) { // select 입력시 노드 조회
    const target = input.replace('SELECT', '').trim();
    executeSQL('SELECT', { target });
  }
  else if (input.startsWith('DELETE')) { // delete 입력시 노드 삭제
    const target = input.replace('DELETE', '').trim();
    executeSQL('DELETE', { target });
  }
  else if (input.startsWith('UPDATE')) { // update 입력시 노드 수정
    const parts = input.split(' ');
    executeSQL('UPDATE', {
      oldValue: parts[1],
      newValue: parts.slice(2).join(' ')
    });
  }
});