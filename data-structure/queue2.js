// - 가장 먼저 들어온 작업을 처리
// - 작업이 없으면 undefined 반환

// const queue = ['작업1', '작업2', '작업3'];
const queue = [];

function processTask() {
  // 1. 가장 먼저 들어온(-> 배열의 맨 앞 요소를 빼내어 처리 (선입 선출) : shift() 사용하여) 작업 처리
  // 2. 작업이 없다면 (queue의 배열이 비어있다면) udefined 반환

  if(queue.length === 0) return undefined; // 만약 queue 배열의 길이가 0이라면 undefined
  return queue.shift(); // shift() : 가장 앞에 있는 요소 빼내어 처리
}

function addTask(task) {
  return queue.push(task);
}

addTask('요청1');
addTask('요청2');
addTask('요청3');
console.log("현재 작업량:", queue);
processTask(); // 1
addTask('요청4');
processTask(); // 2
console.log("남은 작업:", queue);

// console.log("남은 작업:", queue);
// console.log("완료 작업:", processTask());
// console.log("남은 작업:", queue);
// console.log("완료 작업:", processTask());
// console.log("남은 작업:", queue);
// console.log("완료 작업:", processTask());
// console.log("남은 작업:", queue);
// console.log("완료 작업:", processTask());
// console.log("남은 작업:", queue);