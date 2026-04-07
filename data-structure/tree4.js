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

// let root = createNode('A');
// root.left = createNode('B');
// root.right = createNode('C');
// root.left.left = createNode('D');
// root.left.right = createNode('E');
// root.right.left = createNode('F');

console.log("F 삭제 전:");
printHorizontal(root);

// F 삭제 실행
deleteLeaf(root, 'F');

console.log("\nF 삭제 후:");
printHorizontal(root);