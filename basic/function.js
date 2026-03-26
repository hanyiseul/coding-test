// 1. 일급 객체의 특성
const greetUser = (name) => {
    return `안녕하세요, ${name}님!`;
};

function displayMessage(formatFn, userName) {
    // 함수를 인자로 전달받아 실행
    console.log(formatFn(userName));
}

displayMessage(greetUser, "김철수"); // 안녕하세요, 김철수님!

// 2. 고차 함수 (함수 반환 및 커링)
function createMultiplier(factor) {
    // 내부에서 함수를 생성하여 반환
    return function(number) {
        return number * factor;
    };
}

const doubleValue = createMultiplier(2);
console.log(doubleValue(100)); // 200 (이영희의 점수 계산 예시)

// 3. 순수 함수 vs 비순수 함수
let bonusPoint = 10;

// 비순수 함수: 외부 변수 bonusPoint에 의존하며 이를 변경함
function calculateTotalImpure(score) {
    bonusPoint += 5; 
    return score + bonusPoint;
}

// 순수 함수: 오직 인자로만 계산하고 외부 상태를 변경하지 않음
function calculateTotalPure(score, bonus) {
    return score + bonus;
}

console.log(calculateTotalPure(80, 10)); // 90 