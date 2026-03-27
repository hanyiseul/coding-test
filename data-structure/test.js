//  2: 과일 바구니 개수 세기 (해시 맵)
// 바구니에 담긴 과일들의 이름이 배열로 주어집니다. 
// 각 과일이 몇 개씩 들어있는지 객체(Object) 형태로 정리하여 반환하는 함수를 작성

{

  const test = (arr) => { // 입력값 파라미터로 할당

    let result = {}; // 빈 객체 셋팅
    // 빈 객체에 키 추가하는 법
    // result[key] : 키 이름이 동적이거나 변수에 담겨있을때 대괄호 표기법 사용

    arr.forEach(item => {
      if(result[item]) { // 만약 result값 안에 이미 해당 key값이 있다면 
        result[item] += 1; // value에 1증가
      } else { // 만약 result값에 해당 키값이 없고 신규 추가라면
        result[item] = 1; // value에 1 할당
      }
    });
    console.log(result); // 결과값 출력
  }
  
  test(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']) // 테스트코드
}

// 문제 3: 최고 점수 학생 찾기
// 학생 이름과 점수가 담긴 객체 배열이 주어집니다. 
// 이 중 가장 높은 점수를 받은 학생의 이름을 출력하세요. (단, 점수는 모두 다르다고 가정합니다.)
{
  const test = (arr) => {
    // reduce((누적값, 현재값) => 현재 최고점이 < 현재 최고점보다 작다면 ? 현재값을 누적값에 저장 : 아니면 현재 최고점을 누적값에 저장)
    console.log(arr.reduce((max, cur) => (max.score < cur.score ? cur : max)));
  }
  test([ { name: 'Minsoo', score: 80 }, { name: 'Chulmin', score: 95 }, { name: 'Younghee', score: 70 }])
}
