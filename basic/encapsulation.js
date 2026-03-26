// 1. Lexical Scope 확인
const globalName = "김철수"; // 전역 변수 선언
function outerFn() {
    const outerName = "이영희"; // 지역 변수 선언
    function innerFn() {
        console.log(globalName); // 전역 변수 호출
        console.log(outerName); // 상위 스코프의 지역 변수 호출
    }
    innerFn(); // innerFn 함수 호출
}
outerFn(); // 결과값 : innerFn()의 김철수, 이영희 

// 2. 클로저를 통한 기본 카운터
function createCounter() {
    let count = 0; // (외부에서 못 볼) 숨길 변수 선언
    
    return function() { // 함수 호출 시 반환할 함수 선언
        count++; // 호출할때마다 1씩 증가
        return count; // 증가한 count 반환
    };
}

const parkCounter = createCounter(); // parkCounter 변수에 createCounter 함수 담기
console.log(parkCounter()); // 1
console.log(parkCounter()); // 2

// 3. 정보 은닉과 객체 반환 (Encapsulation)
function userManager(initialName) { // initialName 파라미터를 담은 userManager 함수 선언
    let userName = initialName; // 파라미터값을 담을 변수 선언 (직접 접근 불가)
    
    return { // 함수 선언시 반환할 객체
        getName: function() { // userManager 함수의 getName 호출 시
            return userName; // userName 반환
        },
        setName: function(newName) {  // userManager 함수의 setName 호출 시
            userName = newName; // setName의 파라미터값 반환
        }
    };
}

const choiManager = userManager("최현우"); // 변수에 파라미터값을 담은 함수 저장
console.log(choiManager.getName()); // 최현우
choiManager.setName("최현우_최종");
console.log(choiManager.getName()); // 최현우_최종
console.log(choiManager.userName);  // undefined (직접 접근 불가)


/**********************************정답******************************************* */

{
  //최상위 블록에 선언되어 어디서든 참조 가능(전역 스코프)
  const globalName = "김철수";

  function outerFn() {
      // outerFn, 블록 내부에서만 유효함 (외부 함수 스코프)
      const outerName = "이영희";

      function innerFn() {

          console.log(globalName); // 전역 참조
          console.log(outerName);  // 외부 함수 참조
      }

      // innerFn 실행, 정의된 시점의 환경을 바탕으로 변수를 찾아 출력함
      innerFn();
  }

  outerFn();

  //--------------------------------------------------

  function createCounter() {
      // 외부에서 직접 수정할 수 없는 지역 변수
      let count = 0; 

      // 반환되는 함수는 자신이 선언된 시점의 상위 스코프(count)를 기억함 (클로저)

      return function() {
          count++;      // [상태 유지] 상위 스코프의 count 값을 1 증가시킴
          return count; // 변경된 현재의 카운트 값을 반환함
      };
  }

  // createCounter가 종료되어도 반환된 함수는 여전히 count 변수에 접근 가능함

  const myCounter = createCounter();

  console.log(myCounter()); // [결과] 1 (count를 기억하고 있음)
  console.log(myCounter()); // [결과] 2 (이전 상태가 유지됨)
  console.log(myCounter()); // [결과] 3 
  console.log(myCounter()); // [결과] 4

  //--------------------------------------------------

  function userManager(initialName) {
      // 프라이빗 변수, 함수 내부 지역 변수로 선언되어 외부에서 직접 접근 불가
      let userName = initialName; 


      // 반환된 객체의 메서드들은 클로저가 되어 userName 변수를 기억함

      return {
          // 안전하게 값을 읽음
          getName: function() {
              return userName;
          },
          // 정해진 규칙에 따라 값을 수정
          setName: function(newName) {
              userName = newName;
          }
      };
  }

  // 인스턴스 생성: "최현우"라는 상태를 가진 독립적인 클로저 환경 구축
  const choiManager = userManager("최현우");

  // 메서드를 통한 접근 (정상 동작)
  console.log(choiManager.getName());       // "최현우"

  // 메서드를 통한 상태 변경 (상태 유지 및 업데이트)
  choiManager.setName("최현우최종");
  console.log(choiManager.getName());       // "최현우최종"

  // 직접 접근 시도 (정보 은닉 확인)
  console.log(choiManager.userName);        // undefined (직접 접근이 차단됨)
}



// 실습 1: 스코프 체인 탐색 이해
{const value = "전역"; // 전역 변수 실행

function firstFn() { // firstFn 함수 선언
    // const는 재선언이 안되지만 함수 내에서 지역변수로는 가능
    const value = "첫번째"; // firstFn의 지역 변수 선언
    
    function secondFn() {
        // 1. secondFn 내의 value 없음
        // 2. secondFn의 상위 스코프인 firstFn의 value 호출
        // 3. 탐색 종료
        console.log(value);  
    }
    
    secondFn(); // secondFn 함수 실행
}

firstFn(); // 첫번째
// firstFn를 실행하면 firstFn 함수의 value값이 호출되기 때문에 "첫번째"
// const value = "전역";를 실행하고 싶다면 firstFn(); 가 아닌 console.log(value); 호출
}




/***********************************정답******************************************** */
{
  // 최상위 스코프 체인
const value = "전역";

function firstFn() {
    const value = "첫번째"; // 상위 스코프의 변수를 가림

    function secondFn() {
        // 스코프체인 secondFn 내부(없음) --> firstFn(있음) --> '첫번째' 출력
        console.log(value); 
    }

    secondFn();
}

firstFn();

//---------------------------

function createStudent(name) {
    let score = 0; // 외부에서 직접 접근할 수 없는 은닉된 상태값
    return {
        addScore: function(point) {
            score += point; // 생성 시점의 환경(score)을 기억하여 수정
        },
        getScore: function() {
           //  return `${name} 학생의 점수: ${score}`; // 상태 읽기 전용 메서드
        }
    };
}

const limStudent = createStudent("임윤아");
limStudent.addScore(10);
console.log(limStudent.getScore()); // 출력: "임윤아 학생의 점수: 10"

//---------------------------

const myName = "강하늘";

function printName() {
    // 함수가 '호출'된 곳이 아닌 '정의(렉시컬)'된 곳의 상위 스코프를 참조함
    console.log(myName); 
}

function wrapper() {
    const myName = "이진우";
    printName(); // wrapper 내부에서 호출해도 결과는 전역의 "강하늘"
}

wrapper();

//----------------------------

function bankAccount(initialBalance) {
    let balance = initialBalance; // 외부 접근 차단
    return {
        deposit: function(amount) {
            if (amount > 0) { // 내부 로직을 통한 데이터 무결성 유지
                balance += amount;
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = bankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 출력: 1500

//-----------------------------

function timerTest() {
    // let은 블록마다 새로운 바인딩을 생성함
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            // 각 반복 차수의 i 값을 개별적으로 기억(클로저)함
            console.log(i); 
        }, 100);
    }
}

timerTest(); // 출력: 0, 1, 2 (만약 var였다면 최종값인 3, 3, 3을 출력)
}


// 2: 클로저를 활용한 데이터 독립성 유지
{
function createStudent(name) {
  let score = 0;

  return {
    addScore : function(amount) {
        score += amount;
    },
    getScore: function() {
        return `${name}, ${score}`;
    }
  }
}

const limStudent = createStudent("임윤아");
// 실습: 점수 10점을 추가하고 최종 점수를 출력하세요.
limStudent.addScore(10);
console.log(limStudent.getScore());
}


{
  const myName = "강하늘";

  function printName() {
      // printName에는 myName이 없어서 상위로 넘어가서 값을 찾음
      // 그런데 값은 호출 시점이 아니라 정의 시점 기준으로 찾음
      // printName는 전역함수로 정의되었기 때문에 전역 변수 "강하늘"
      console.log(myName);
  }

  function wrapper() {
      const myName = "이진우";
      printName(); // "강하늘"로 값이 정해진 printName 함수를 wrapper에서 호출
  }

  wrapper(); // 강하늘
}


// 4. 클로저를 이용한 캡슐화와 유효성 검사
// 은행 계좌를 관리하는 bankAccount 함수를 작성하세요. 
// deposit 메서드는 양수일 때만 입금이 가능해야 하며, 잔액(balance)은 외부에서 직접 수정할 수 없어야 합니다.
{
  function bankAccount(initialBalance) {
    let result = initialBalance; // 파라미터 값을 담을 변수 선언 (직접 접근 불가)

    return {
      deposit : function (amount) {
        if(amount > 0) { //  deposit 메서드는 양수일 때
          result += amount; // result에 입금 금액 담기
        }
      },
      getResult : function () {
        return result; // 최종 결과값 반환
      }
    }
  }

  const myAccount = bankAccount(1000);
  // 실습: 500원을 입금하고 잔액을 확인하세요.
  
  myAccount.deposit(500);
  console.log(myAccount.getResult());
}

{
  
function timerTest() {
  // var는 변수 재선언의 허용 ->  똑같은 이름의 변수를 여러 번 선언해도 에러를 내지 않음
  // let으로 바꾼 후 i의 값만 재할당 해줘야함
    for (let i = 0; i < 3; i++) { // 0부터 시작하기 때문에 i는 0,1,2 
      setTimeout(function() {
        console.log(i); // 0.1초마다 i값을 콘솔 로그로 실행
      }, 100);
    }
  }
  timerTest();
}
