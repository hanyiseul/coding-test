// 4.1 기본 노드 클래스
class TreeNode {
  constructor(value) {
    this.value = value;      // 1.1 노드가 담고 있는 데이터
    this.children = [];      // 1.1 자식 노드들에 대한 '참조' 배열
  }
}

// 사용 예시
const tempNode = new TreeNode("데이터");
console.log(tempNode);
console.log(tempNode.value); // "데이터"
console.log(tempNode.children); // [] (빈 배열)


// 4.2 트리 생성 및 노드 연결

// 1. 노드들 생성
const root = new TreeNode("컴퓨터"); // 1.2 루트 노드
const folder1 = new TreeNode("문서");
const folder2 = new TreeNode("사진");
const file1 = new TreeNode("보고서.docx"); // 1.3 리프 노드

// 2. 부모-자식 관계 연결
root.children.push(folder1); // 루트의 자식으로 문서 폴더 추가
root.children.push(folder2); // 루트의 자식으로 사진 폴더 추가
folder1.children.push(file1); // 문서 폴더의 자식으로 파일 추가

console.log(root)

// 4.3 트리 전체 탐색 함수
function printAllNodes(node) {
  console.log(node.value); // 현재 노드의 값 출력
  
  // 자식 노드가 있다면, 각각의 자식에 대해 이 함수를 다시 호출
  // 자식이 없으면(리프 노드) 자동으로 반복문이 종료됨
  node.children.forEach(child => {
    printAllNodes(child); // 재귀 호출
  });
}

// 실행 (수동 생성한 트리 사용)
printAllNodes(root); 
// 출력 순서: "컴퓨터" -> "문서" -> "보고서.docx" -> "사진"



// 4.4 특정 데이터 검색 함수
function containsNode(node, targetValue) {
  // 1. 현재 노드의 값이 찾는 값과 같으면 true 반환
  if (node.value === targetValue) {
    return true;
  }

  // 2. 자식 노드들을 돌며 검색
  for (let child of node.children) {
    if (containsNode(child, targetValue)) {
      return true; // 자식 서브트리에서 찾았으면 true 반환
    }
  }

  // 3. 어디서도 찾지 못했다면 false 반환
  return false;
}

// 실행 예시
console.log(containsNode(root, "보고서.docx")); // true
console.log(containsNode(root, "게임.exe"));   // false

function removeChildNode(parentNode, valueToDelete) {
  // 1. 기존 자식 노드 개수를 확인합니다.
  const originalCount = parentNode.children.length;

  // 2. filter를 사용하여 삭제할 값을 제외한 나머지 노드들로 배열을 재구성합니다.
  // 이 과정에서 삭제 대상 노드에 대한 '참조'가 끊어집니다.
  parentNode.children = parentNode.children.filter(child => {
    return child.value !== valueToDelete;
  });

  // 3. 삭제 결과에 따른 피드백을 출력합니다.
  if (parentNode.children.length < originalCount) {
    console.log(`알림: '${valueToDelete}' 노드가 성공적으로 삭제되었습니다.`);
  } else {
    console.log(`알림: 삭제하려는 '${valueToDelete}' 노드를 찾을 수 없습니다.`);
  }
}

// 4.2에서 만든 root("컴퓨터") 트리를 사용한다고 가정
// root -> [folder1("문서"), folder2("사진")]

removeChildNode(root, "사진"); 

console.log(root.children); 
// 결과: folder2("사진") 노드가 삭제되고 folder1("문서")만 남음


// 실습
class RankNode { // 1. 클래스 생성
  constructor(rank) {
    this.rank = rank;      // 1.2 노드가 담고 있는 데이터
    this.line = [];       // 1.3 자식 노드들에 대한 '참조' 배열
  }
}

// 2. 노드 생성
const ceo = new RankNode("사장"); // 2-1. 루트 노드 
const director1 = new RankNode("전무");  // 2-2. 자식 노드
const director2 = new RankNode("이사");  // 2-2. 자식 노드
const manager1 = new RankNode("부장1");  // 2-3. 자식 노드
const manager2 = new RankNode("부장2");  // 2-3. 자식 노드
const manager3 = new RankNode("개발부장1");  // 2-3. 자식 노드
const manager4 = new RankNode("개발부장2");  // 2-3. 자식 노드

// 3. 부모-자식 관계 연결
ceo.line.push(director1); // 3-1. 2-1/2-2노드 연결
ceo.line.push(director2); //  3-1. 2-1/2-2노드 연결
director1.line.push(manager1); // 3-2. 2-2/2-3노드 연결
director1.line.push(manager2); //  3-2. 2-2/2-3노드 연결
director2.line.push(manager3); // 3-2. 2-2/2-3노드 연결
director2.line.push(manager4); //  3-2. 2-2/2-3노드 연결


// 4 트리 전체 탐색 함수
function printAllNodes2(node) {
  console.log(node.rank);   // 현재 노드 출력
  // 자식 노드가 있다면, 각각의 자식에 대해 이 함수를 다시 호출
  // 자식이 없으면(리프 노드) 자동으로 반복문이 종료됨
  node.line.forEach(child => {
    printAllNodes2(child); // 재귀 호출
  });
}
printAllNodes2(ceo); 

// 노드 삭제
function removeChildNode2(parentNode, valueToDelete) {
  // 1. 기존 자식 노드 개수를 확인합니다.
  const originalCount = parentNode.line.length;

  // 2. filter를 사용하여 삭제할 값을 제외한 나머지 노드들로 배열을 재구성합니다.
  // 이 과정에서 삭제 대상 노드에 대한 '참조'가 끊어집니다.
  parentNode.line = parentNode.line.filter(child => {
    return child.rank !== valueToDelete;
  });

  // 3. 삭제 결과에 따른 피드백을 출력합니다.
  if (parentNode.line.length < originalCount) {
    console.log(`알림: '${valueToDelete}' 노드가 성공적으로 삭제되었습니다.`);
  } else {
    console.log(`알림: 삭제하려는 '${valueToDelete}' 노드를 찾을 수 없습니다.`);
  }
}

removeChildNode2(director2, "개발부장2"); 
printAllNodes2(ceo); 

// 이진 트리 전용 노드 객체
{
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;  // 왼쪽 자식 참조
      this.right = null; // 오른쪽 자식 참조
    }
  }
  console.log(BinaryTreeNode)
  // 루트 노드 생성 (Level 0)
  const root = new BinaryTreeNode("A");

  // 자식 노드 연결 (Level 1) - 모든 부모가 2개의 자식을 가짐
  root.left = new BinaryTreeNode("B");
  root.right = new BinaryTreeNode("C");

  // 리프 노드 연결 (Level 2) - 모든 리프의 깊이가 동일함
  root.left.left = new BinaryTreeNode("D");
  root.left.right = new BinaryTreeNode("E");
  root.right.left = new BinaryTreeNode("F");
  root.right.right = new BinaryTreeNode("G");

  function isLeaf(node) {
    return node.left === null && node.right === null;
  }

  // 왼쪽 자식은 없는데 오른쪽 자식만 있는 경우 -> 완전 이진 트리 규칙 위반
  function checkCompleteRule(node) {
    if (node.left === null && node.right !== null) {
      console.log("경고: 왼쪽 자식이 비어있으므로 완전 이진 트리가 아닙니다.");
      return false;
    }
    return true;
  }

  checkCompleteRule(root); // 정상

  function getBinaryTreeHeight(node) {
    if (node === null) return -1; // 빈 노드는 -1 반환 (간선 기준)
    
    // 왼쪽과 오른쪽 중 더 깊은 쪽의 높이를 선택하여 1을 더함
    const leftHeight = getBinaryTreeHeight(node.left);
    const rightHeight = getBinaryTreeHeight(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }

  console.log("트리의 전체 높이:", getBinaryTreeHeight(root)); // 출력: 2

  function printLevel(node, currentLevel = 0) {
    if (node === null) return;
    
    console.log(`${node.value} 노드의 레벨: ${currentLevel}`);
    
    // 자식으로 내려갈 때 레벨을 1씩 증가
    printLevel(node.left, currentLevel + 1);
    printLevel(node.right, currentLevel + 1);
  }

  printLevel(root); 
  // A: 0, B: 1, D: 2 ... 순으로 출력
}


{
  class BSTNode {
    constructor(value) {
      this.value = value; // 노드 값
      this.left = null; // 노드 왼쪽
      this.right = null; // 노드 오른쪽
    }
  }

  class BinarySearchTree { // BSTNode가 들어갈 트리
    constructor() {
      this.root = null; // 트리의 루트
    }
    // 노드 삽입
    insert = function (value) { // BinarySearchTree의 insert 프로토타입 생성
      const newNode = new BSTNode(value); // 트리노드 newNode에 저장
      if (!this.root) { // 루트가 없으면
        this.root = newNode; // BSTNode 노드를 넣어줌
        return;
      }
      let current = this.root; // 루트부터 시작
      while (true) {  // 루트가 존재하는 동안
        if (value < current.value) { // 현재보다 작으면 왼쪽으로
          if (!current.left) { current.left = newNode; break; } // 왼쪽 노드가 없으면 새 노드 넣어주기
          current = current.left; // 현재를 왼쪽으로 이동
        } else { // 현재보다 크면 오른쪽으로
          if (!current.right) { current.right = newNode; break; } // 오른쪽 노드가 없으면 새 노드 넣어주기
          current = current.right; // 현재를 오른쪽으로 이동
        }
      }
    }
    // 노드 찾기
    find = function (value) { // BinarySearchTree의 find 프로토타입 생성
      if (!this.root) return false; // 루트 없으면 false
      let current = this.root; // 루트부터 시작
      while (current) { // 탐색할 노드가 있다면
        if (value === current.value) return true; // 현재값과 원하는 값을 비교해서 동일하면 true
        // 값 비교 후 방향 결정
        // 현재가 원하는 값보다 작으면 왼쪽이동 크면 / 오른쪽 이동 
        current = value < current.value ? current.left : current.right;
      }
      return false; // 끝까지 못 찾음
    }
    
    // 왼쪽은 작은 값, 오른쪽은 큰 값
    getMin(node = this.root) { // 최소값 구하기 (노드가 루트일때)
      // 왼쪽 끝까지 내려가면 최소값
      while (node && node.left) node = node.left; // 왼쪽 노드가 존재한다면 => 노드를 계속 왼쪽으로 이동
      return node ? node.value : null; // 노드 왼쪽 맨 마지막 값이 최소값 
    }

    getMax(node = this.root) { // 최대값 구하기 (노드가 루트일때)
      // 오른쪽 끝까지 내려가면 최대값
      while (node && node.right) node = node.right; // 오른쪽 노드가 존재한다면 => 노드를 계속 오른쪽으로 이동
      return node ? node.value : null; // 노드 오른쪽 맨 마지막 값이 최대값
    }

    // 단순화를 위해 자식이 없는 리프 노드를 찾아 연결을 끊는 예시
    removeLeaf(value) {
      this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
      if (!node) return null;
      if (value < node.value) {
        node.left = this._removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = this._removeNode(node.right, value);
        return node;
      } else {
        // 값을 찾았고 자식이 없다면 null 반환 (부모와의 연결 끊기)
        if (!node.left && !node.right) return null;
        return node; // 자식이 있는 경우는 더 복잡한 처리가 필요함
      }
    }
  }
 const bst = new BinarySearchTree();

  // 데이터 삽입
  const data = [15, 10, 20, 8, 12];
  for (let v of data) {
    bst.insert(v);
  }

  console.log("--- BST 탐색 테스트 ---");
  console.log("12 존재 여부:", bst.find(12)); // true
  console.log("25 존재 여부:", bst.find(25)); // false
  console.log(" 8 존재 여부:", bst.find(8));  // true
  console.log(" getMin :", bst.getMin());  // 8
  console.log(" getMax :", bst.getMax());  // 20
  console.log(" removeLeaf :", bst.removeLeaf(15));  // undefined
  console.log(" _removeNode :", bst._removeNode(12));  // null

}
// 순회
{
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;  // 왼쪽 자식 참조
      this.right = null; // 오른쪽 자식 참조
    }
  }
  // 4.3.1 전위 순회 (Preorder: Root-L-R)
  function preorder(node) {
    if (!node) return;
    console.log(node.value); // 부모 먼저
    preorder(node.left);    // 왼쪽
    preorder(node.right);   // 오른쪽
  }

  // 4.3.2 중위 순회 (Inorder: L-Root-R)
  function inorder(node) {
    if (!node) return;
    inorder(node.left);     // 왼쪽 먼저 끝까지
    console.log(node.value); // 부모
    inorder(node.right);    // 오른쪽
  }

  // 4.3.3 후위 순회 (Postorder: L-R-Root)
  function postorder(node) {
    if (!node) return;
    postorder(node.left);   // 왼쪽
    postorder(node.right);  // 오른쪽
    console.log(node.value); // 부모 나중에
  }

  // 4.3.4 레벨 순회 (Level Order: BFS)
  function levelOrder(root) {
    if (!root) return;
    const queue = [root]; // 큐에 루트 삽입
    
    while (queue.length > 0) {
      const node = queue.shift(); // 앞에서 하나 꺼냄
      console.log(node.value);
      
      // 왼쪽, 오른쪽 자식을 큐의 뒤에 추가 (나중에 방문)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  // 1. 테스트를 위한 이진 트리 생성
  //      1 (Root)
  //     / \
  //    2   3
  //   / \
  //  4   5

  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);

  // 2. 각 순회 방식 실행

  console.log("--- 4.3.1 전위 순회 (Preorder) ---");
  preorder(root); 
  // 출력: 1 -> 2 -> 4 -> 5 -> 3
  // (부모 1 출력 후, 왼쪽 줄기 2-4-5 다 보고, 마지막에 오른쪽 3)

  console.log("--- 4.3.2 중위 순회 (Inorder) ---");
  inorder(root);
  // 출력: 4 -> 2 -> 5 -> 1 -> 3
  // (가장 왼쪽 4부터 시작해서 부모 2, 그다음 5... 순으로 올라옴)

  console.log("--- 4.3.3 후위 순회 (Postorder) ---");
  postorder(root);
  // 출력: 4 -> 5 -> 2 -> 3 -> 1
  // (자식들 4, 5를 먼저 처리하고 부모 2를 본 뒤, 최종적으로 루트 1)

  console.log("--- 4.3.4 레벨 순회 (Level Order) ---");
  levelOrder(root);
  // 출력: 1 -> 2 -> 3 -> 4 -> 5
  // (층별로 1층의 1, 2층의 2-3, 3층의 4-5 순서대로 출력)
}