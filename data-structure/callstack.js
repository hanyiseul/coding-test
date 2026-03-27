function first() {
    console.log("첫 번째 함수 시작");
    second();
    console.log("첫 번째 함수 종료");
}

function second() {
    console.log("두 번째 함수 실행 (박지민의 요청)");
}

first();
/*
출력 순서:
1. 첫 번째 함수 시작 (Stack: Global -> first)
2. 두 번째 함수 실행 (Stack: Global -> first -> second)
3. 첫 번째 함수 종료 (Stack: Global -> first)
*/