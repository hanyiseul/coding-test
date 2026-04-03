// 브라우저 히스토리 예제 1: URL 방문 기록

// const backStack = [];
// const forwardStack = [];

// // 페이지 이동
function visit(url) { // visit 함수에 url을 파라미터로 받으면
    backStack.push(url); // backStack 배열에 파라미터값인 url을 삽입
    forwardStack.length = 0; // 앞으로가기 초기화
    // 최대 히스토리 저장 개수: 3개
    if(backStack.length > 3) { // 만약 backStack의 길이가 3이 넘어가면
      backStack.shift(); // 배열 맨 앞의 요소 제거 (가장 오래된 데이터)
    }
}

// // 실행
// visit('https://www.google.com');
// visit('https://www.naver.com');
// visit('https://www.youtube.com');

// // console.log('현재 페이지:', backStack.pop());
// // console.log('현재 페이지:', backStack.pop());
// // console.log('현재 페이지:', backStack.pop());
// // 현재 페이지: https://www.youtube.com

// // 브라우저 히스토리 예제 2: 뒤로가기

// function goBack() {
//     if (backStack.length <= 1) return;

//     const current = backStack.pop();
//     forwardStack.push(current);

//     return backStack[backStack.length - 1];
// }

// // 실행
// console.log('뒤로가기:', goBack());
// // https://www.naver.com

// // 상태
// // backStack: ['https://www.google.com', 'https://www.naver.com']
// // forwardStack: ['https://www.youtube.com']

// // 브라우저 히스토리 예제 3: 앞으로가기

// function goForward() {
//     if (forwardStack.length === 0) return;

//     const url = forwardStack.pop();
//     backStack.push(url);

//     return url;
// }

// // 실행
// console.log('앞으로가기:', goForward());
// // https://www.youtube.com

// // 브라우저 히스토리 예제 4: 현실 흐름

// visit('https://www.google.com');
// visit('https://news.naver.com');
// visit('https://shopping.naver.com');

// // 뒤로가기 2번
// goBack(); // news.naver.com
// goBack(); // google.com

// // 앞으로가기 1번
// goForward(); // news.naver.com

// // 새로운 페이지 방문 (forwardStack 초기화 핵심)
// visit('https://www.github.com');

// console.log('backStack:', backStack);
// console.log('forwardStack:', forwardStack);

// // 결과
// // backStack:
// // ['https://www.google.com','https://news.naver.com','https://www.github.com']
// //
// // forwardStack: []

// // 브라우저 히스토리 예제 5: 상태 확인

// function printState() {
//     console.log('현재 페이지:', backStack[backStack.length - 1]);
//     console.log('뒤로가기 스택:', backStack);
//     console.log('앞으로가기 스택:', forwardStack);
// }

// // 실행
// printState();


// - 현재 페이지는 항상 `backStack`의 top
// - 뒤로가기는 최소 1개 페이지는 유지해야 함
// - 뒤로가기 시 현재 페이지는 `forwardStack`으로 이동

  const backStack = ['https://www.google.com', 'https://www.naver.com', 'https://www.youtube.com'];
  const forwardStack = [];

  function goBack() {
      // - 뒤로가기는 최소 1개 페이지는 유지해야 함
      if(backStack.length <= 1) return; // 최소 1개 유지 -> 1보다 작거나 같을 경우 리턴

      // 현재페이지
      const current = backStack.pop();
      console.log("현재 페이지: ", current); // 현재페이지

      // - 뒤로가기 시 현재 페이지는 `forwardStack`으로 이동
      forwardStack.push(current); // 뒤로가기 진행
      console.log("뒤로가기: ", forwardStack); // 뒤로가기

      // - 현재 페이지는 항상 `backStack`의 top
      return backStack.slice(-1)
  }
  // console.log("goback" ,goBack());
  // console.log("forwardStack", forwardStack);

  // visit('https://www.google.com');
  // visit('https://www.naver.com');
  // visit('https://www.youtube.com');
  // console.log("forwardStack", forwardStack);

  // // 새로운 페이지 방문
  // visit('https://www.github.com');
  // console.log("goback" ,goBack());
  // console.log("forwardStack", forwardStack);

  function goForward() {
    const page = forwardStack.pop();
    backStack.push(page);
    return page;
  }

  visit('https://www.google.com');
  visit('https://www.naver.com');
  visit('https://www.youtube.com');

  console.log("goback1" ,goBack());       // 1
  visit('https://www.github.com'); // 2
  console.log("goback2" ,goBack());     // 3
  console.log("goForward3", goForward);     // 4
  console.log("backStack4", backStack);     // 4
  console.log("forwardStack5", forwardStack);     // 5