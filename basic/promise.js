{
  const checkUserAuth = new Promise((resolve, reject) => {
      const isAuthorized = true; // 김철수 사용자의 인증 여부 예시

      if (isAuthorized) {
          // Pending -> Fulfilled 상태 전이
          resolve("인증 성공");
      } else {
          // Pending -> Rejected 상태 전이
          reject(new Error("인증 실패"));
      }
  });

  checkUserAuth
      .then(result => console.log(result)) // Fulfilled 시 실행
      .catch(error => console.error(error)); // Rejected 시 실행
}

{
  console.log("1. 동기 코드 실행");

  setTimeout(() => {
      console.log("2. 매크로태스크 (setTimeout)");
  }, 0);

  Promise.resolve().then(() => {
      console.log("3. 마이크로태스크 (Promise)");
  });

  console.log("4. 동기 코드 종료");

  /* 출력 순서:
  1. 동기 코드 실행
  4. 동기 코드 종료
  3. 마이크로태스크 (Promise)
  2. 매크로태스크 (setTimeout)
  */
}