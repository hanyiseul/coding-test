// 1. 비동기 통신을 흉내내는 가상 함수 정의
function fetchUser(name) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: name }), 1000);
    });
}

function fetchPost(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`User ${userId}의 게시글입니다.`), 1000);
    });
}

// 2. 제너레이터 함수 정의
function* fetchGenerator() {
    console.log("데이터 로딩 시작...");
    const user = yield fetchUser("김철수"); // 일시 중단 및 Promise 반환
    console.log("사용자 정보 획득:", user);
    
    const post = yield fetchPost(user.id); // 재개 후 다시 중단
    console.log("게시글 정보 획득:", post);
    
    return post;
}

// 3. 내부 실행기(Runner) 구현
const gen = fetchGenerator();

// 첫 번째 next()는 첫 yield까지 실행하고 Promise를 반환함
gen.next().value.then(user => {
    // 두 번째 next(user)는 중단된 지점에 user 값을 넣어주며 재개함
    gen.next(user).value.then(post => {
        // 세 번째 next(post)는 마지막 결과를 반환함
        gen.next(post);
        console.log("모든 작업 완료");
    });
});