// 스택 예제 1 : 기본 push & pop
const stack = [];

// 1. 데이터 삽입 (push)
stack.push("데이터 a");
stack.push("데이터 b");
stack.push("데이터 c");

console.log("push : ", stack); // [ '데이터 a', '데이터 b', '데이터 c' ]

// 2. 데이터 추출 (Pop)
const popped = stack.pop();

console.log(`추출된 요소 : ${popped}`); // 추출된 요소 : 데이터 c
console.log(`현재 스택 상태 : ${stack}`); //현재 스택 상태 : 데이터 a,데이터 b


// 스택 예제 2 : 뒤로가기 로직
const backStack = [];

// 1. 페이지 접속 및 이동
backStack.push("home.com");
backStack.push("menu.com");
backStack.push("settings.com");

// 2. '뒤로가기'실행
if(backStack.length > 0) {
  const currentPage  = backStack.pop();
  console.log(`${currentPage}에서 이전 페이지로 이동합니다.`);
}

console.log(`남은 히스토리: ${backStack}`); // ['home.com', 'menu.com'] 이 형식을 기억하고 명령대기 출력없음

// 스택 예제 3: 문자열 역순 출력 (String Reversal)
const text = "hello";
const charStack = [];
let reversedText = "";

// 1. 글자를 하나씩 스택에 push
for (let char of text) {
  charStack.push(char);
}

// 2. 스택에서 하나씩 Pop 하여 새로운 문자열 생성
while (charStack.length > 0) {
  reversedText += charStack.pop();
}

console.log(`역순 결과: ${reversedText}`); // 역순 결과: OLLEH
console.log(`스택 상태: ${charStack}`); // [] 이 형식을 기억하고 명령대기 출력없음


// 스택 예제 4: 괄호 짝 맞추기
const expression = "( ( 1 + 2 ) * 3 )";
const parenStack = [];
let isBalanced = true;

for (let char of expression) {
    if (char === '(') {
        parenStack.push(char); // 여는 괄호는 무조건 Push
        console.log(parenStack)
    } else if (char === ')') {
        if (parenStack.length === 0) {
            isBalanced = false;
            console.log(parenStack)
            break;
        }
        parenStack.pop(); // 짝이 맞으면 최상단 여는 괄호 제거
    }
}

if (parenStack.length !== 0) isBalanced = false;

console.log(`수식의 유효성: ${isBalanced}`); // 수식의 유효성: true
console.log(`최종 스택: ${parenStack}`); // [] 이 형식을 기억하고 명령대기 출력없음

// 스택 예제 5: Undo(실행 취소) 기능
const actionLog = [];

// 1. 작업 수행 및 로그 기록
actionLog.push('글자 입력');
actionLog.push('폰트 변경');
actionLog.push('색상 변경');

// 2. 'Ctrl + Z' (Undo) 실행
const undoAction = actionLog.pop();

console.log(`취소된 작업: ${undoAction}`); // 취소된 작업: 색상 변경
console.log(`현재 작업 로그: ${actionLog}`); // ['글자 입력', '폰트 변경'] 이 형식을 기억하고 명령대기 출력없음



/****************************************************************************************/

// 문제 1. 스택(Stack): 후순위 인원 관리 (올바른 짝 찾기)
// 명단에 (와 )가 섞여 들어옵니다. (는 '입장 예정', )는 '입장 완료'를 뜻합니다. 
// 모든 '입장 예정' 인원이 누락 없이 '입장 완료' 되었는지 검사하는 함수를 작성하세요.

// const testCode = "(())()";

const testCode = (code) => {
  const testStack = [];
  let stackCheck = true;
  for(let char of code) {
    if(char === '(') {
      testStack.push(char);
    } else if (char === ')') {
      if(testStack.length === 0) {
        stackCheck = false;
        break;
      }
      testStack.pop(char);
    }
  }

  if (testStack.length !== 0) {
    stackCheck = false;
  }
  return stackCheck
}
console.log("(())():" ,testCode("(())()"));
console.log("(()" ,testCode("(()"));



/****************************************************************************************/

// 문제 2. 스택(Stack): 중복 이름 연속 제거
// 이름 배열에서 연속으로 같은 이름이 나오면 두 이름을 모두 제거합니다. 
// 제거 후 또 연속되는 이름이 생기면 반복해서 제거합니다. 최종 남은 명단을 반환하세요.

  // 스택을 쌓아야 한다

  /**
 * 박
 * 김
 * 이
 * 이
 * 김
 */
  // 마지막 값과 현재 값이 같은지 픽으로 중복 체크
  

const testCode2 = (arr) => {
  let array = [];
  for(let i = 0; i < arr.length; i++) {
    // array.push(arr[i]);
    console.log(array)
    if(array[array.length-1] === arr[i]) { // 스택의 마지막 값과 현재 값이 같으면
      console.log(array[array.length-1])
      array.pop(); // 둘 다 제거
    } else {
      array.push(arr[i]);
    }
  }
  return array
}

console.log(testCode2(['김', '이', '이', '김', '박']))