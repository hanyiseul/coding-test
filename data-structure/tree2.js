{
  // 전위순회
  function createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }

  const root = createNode('A');

  root.left = createNode('B');
  root.right = createNode('C');

  root.left.left = createNode('D');
  root.left.right = createNode('E');

  function printHorizontal(node) {
    console.log("--- Tree Structure ---");
    console.log("        " + node.value);
    console.log("      /   \\");
    console.log("     " + node.left.value + "     " + node.right.value);
    console.log("    / \\");
    console.log("   " + node.left.left.value + "   " + node.left.right.value);
  }

  //위에서 사용한 preorder 함수는 결과를 저장하는 내용이 없기 때문에 결과 저장을 추가
  function getPreorder(node, result = []) {
    if (!node) return result;
    result.push(node.value);
    getPreorder(node.left, result);
    getPreorder(node.right, result);
    return result;
  }

  printHorizontal(root);
  console.log("\n--- Preorder Traversal ---");
  const traversalResult = getPreorder(root);
  console.log(traversalResult.join(" -> "));

  /**
   * 전위순회
   * 루트에서 왼쪽 방향으로 먼저 탐색하는 순회 방법으로 루트-왼쪽노드-오른쪽노드 순임
   * 트리의 깊이가 깊어질수록 속도는 느려짐 O(logn)
   */
}

{
  // 중위 순회
  function createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }

  const root = createNode('A');

  root.left = createNode('B');
  root.right = createNode('C');

  root.left.left = createNode('D');
  root.left.right = createNode('E');

  function printHorizontal(node) {
    console.log("--- Tree Structure ---");
    console.log("        " + node.value);
    console.log("      /   \\");
    console.log("     " + node.left.value + "     " + node.right.value);
    console.log("    / \\");
    console.log("   " + node.left.left.value + "   " + node.left.right.value);
  }

  function getInorder(node, result = []) {
    if (!node) return result;
    getInorder(node.left, result);
    result.push(node.value);
    getInorder(node.right, result);
    return result;
  }

  printHorizontal(root);
  console.log("\n--- Inorder Traversal ---");
  const traversalResult = getInorder(root);
  console.log(traversalResult.join(" -> "));

  /**
   * 중위 순회
   * 왼쪽노드-루트-오른쪽노드 (무조건 왼쪽부터 탐색)
   * 
   */
}

{
  // 후위 순회 
  function createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }

  const root = createNode('A');

  root.left = createNode('B');
  root.right = createNode('C');

  root.left.left = createNode('D');
  root.left.right = createNode('E');

  function printHorizontal(node) {
    console.log("--- Tree Structure ---");
    console.log("        " + node.value);
    console.log("      /   \\");
    console.log("     " + node.left.value + "     " + node.right.value);
    console.log("    / \\");
    console.log("   " + node.left.left.value + "   " + node.left.right.value);
  }

  function getPostorder(node, result = []) {
    if (!node) return result;
    // Left -> Right -> Root
    getPostorder(node.left, result);
    getPostorder(node.right, result);
    result.push(node.value);
    return result;
  }

  printHorizontal(root);
  console.log("\n--- Postorder Traversal ---");
  const traversalResult = getPostorder(root);
  console.log(traversalResult.join(" -> "));
}

{
  
  function createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }
  const root = createNode('사과');
  root.left = createNode('포도');
  root.right = createNode('오렌지');
  root.left.left = createNode('수박');
  root.left.right = createNode('참외');

  // 새로운 노드 추가
  root.right.left = createNode('딸기'); 

  function printHorizontal(node) {
    console.log("--- Tree Structure ---");
    console.log("        " + node.value);
    console.log("      /   \\");
    console.log("     " + node.left.value + "     " + node.right.value);
    console.log("    / \\           /  ");
    console.log("   " + node.left.left.value + "   " + node.left.right.value+ "   " + node.right.left.value);
  }

  function getPreorder(node, result = []) {
    if (!node) return result;
    result.push(node.value);
    getPreorder(node.left, result);
    getPreorder(node.right, result);
    return result;
  }
  function getInorder(node, result = []) {
    if (!node) return result;
    getInorder(node.left, result);
    result.push(node.value);
    getInorder(node.right, result);
    return result;
  }
  function getPostorder(node, result = []) {
    if (!node) return result;
    // Left -> Right -> Root
    getPostorder(node.left, result);
    getPostorder(node.right, result);
    result.push(node.value);
    return result;
  }

  printHorizontal(root);
  // 결과 확인
  console.log("전위",getPreorder(root).join(" ⭐ ")); 
  console.log("중위",getInorder(root).join(" ⭐ ")); 
  console.log("후위",getPostorder(root).join(" ⭐ ")); 
  
  // 출력: 사과 -> 포도 -> 수박 -> 참외 -> 오렌지
}

{
  // 삭제
  // 새로운 노드 객체를 생성하는 함수
  function createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    };
  }

  // 리프 노드를 삭제하는 함수
  function deleteLeaf(node, target) {
    if (!node) return null;

    if (
      node.left &&
      node.left.value === target &&
      !node.left.left &&
      !node.left.right
    ) {
      node.left = null;   // 연결 제거
      return node;
    }

    if (
      node.right &&
      node.right.value === target &&
      !node.right.left &&
      !node.right.right
    ) {
      node.right = null;
      return node;
    }

    deleteLeaf(node.left, target);
    deleteLeaf(node.right, target);

    return node;
  }

  // 트리의 구조를 콘솔에 아스키 아트로 출력하는 함수
  function printHorizontal(node) {
    if (!node) return;
    console.log("--- Tree Structure ---");
    console.log("        " + node.value);
    console.log("      /   \\");
    
    let leftVal = node.left ? node.left.value : " ";
    let rightVal = node.right ? node.right.value : " ";
    console.log("     " + leftVal + "     " + rightVal);
    console.log("    / \\   / ");
    
    let ll = (node.left && node.left.left) ? node.left.left.value : " ";
    let lr = (node.left && node.left.right) ? node.left.right.value : " ";
    let rl = (node.right && node.right.left) ? node.right.left.value : " ";
    
    console.log("   " + ll + "   " + lr + " " + rl);
  }

  let root = createNode('A');
  root.left = createNode('B');
  root.right = createNode('C');
  root.left.left = createNode('D');
  root.left.right = createNode('E');
  root.right.left = createNode('F');

  console.log("D 삭제 전:");
  printHorizontal(root);

  // D 삭제 실행
  deleteLeaf(root, 'D');

  console.log("\nD 삭제 후:");
  printHorizontal(root);
}
