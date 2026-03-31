{
  /**
   * 1. 맨 처음 동기 코드 "시작"을 실행하고
   * 2. 그 다음 동기코드 "끝"이 실행됨
   * 3. 마지막으로 콜스택에서 처리할 함수를 실행 하는데
   *  3-1. 우선순위가 높은 마이크로테스크 (Promise - "프로미스 콜백")를 먼저 실행하고 
   *  3-2. 마이크로테스크가 모두 처리 완료되면 우선순위가 낮은 매크로테스크(setTimeout - "타이머 콜백")를 실행함
   *
  console.log("시작"); // 1. 동기코드

  // 3. 콜스택 처리
  setTimeout(() => { // 3-2. 매크로테스크
      console.log("타이머 콜백");
  }, 0);

  Promise.resolve().then(() => { // 3-1. 마이크로테스크
      console.log("프로미스 콜백");
  });

  console.log("끝"); // 2. 동기코드*/
}

{
  setTimeout(() => console.log("A"), 0);

  Promise.resolve().then(() => {
      console.log("B");
      return Promise.resolve();
  }).then(() => console.log("C"));

  console.log("D");
}




