/**
 * 간단한 해시 테이블 클래스 구현
 */
class HashTable {
  constructor(size = 10) {
    // 고정된 크기의 버킷 배열 생성
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  /**
   * 해시 함수: 문자열 키를 숫자로 변환
   * @param {string} key 
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size; // 버킷 크기로 나눈 나머지를 인덱스로 사용
  }

  /**
   * 데이터 저장 (Set)
   */
  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    // 이미 키가 존재하는지 확인 (충돌 대응 및 업데이트)
    const existingElement = bucket.find(element => element[0] === key);
    
    if (existingElement) {
      existingElement[1] = value; // 값 업데이트
    } else {
      bucket.push([key, value]); // 새로운 키-값 쌍 추가 (Chaining)
      console.log(`[저장] 인덱스 ${index}: ${key} -> ${value}`);
    }
  }

  /**
   * 데이터 조회 (Get)
   */
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    const element = bucket.find(element => element[0] === key);
    return element ? element[1] : undefined;
  }

  /**
   * 전체 구조 출력
   */
  display() {
    console.log("\n--- 해시 테이블 내부 구조 ---");
    this.buckets.forEach((bucket, idx) => {
      const items = bucket.map(([k, v]) => `[${k}: ${v}]`).join(" -> ");
      console.log(`Bucket ${idx}: ${items || "비어 있음"}`);
    });
  }
}

/**
 * 실행 및 호출부
 */
const myTable = new HashTable(5);

// 1. 데이터 입력
myTable.set("Apple", "Red");
myTable.set("Banana", "Yellow");
myTable.set("Grape", "Purple");

// 2. 충돌 발생 유도 (키의 아스키 코드 합이 같은 경우나 해시 함수 특성상 발생 가능)
myTable.set("Melon", "Green"); 

// 3. 데이터 조회
console.log("\n조회 결과 (Apple):", myTable.get("Apple"));

// 4. 구조 확인
myTable.display();


const userLogs = ["login", "view_page", "login", "logout", "view_page", "view_page"];

function countActivities(logs) {
  const hashCounter = {}; // 해시 테이블 역할을 하는 객체

  for (let activity of logs) {
    // 해시의 Key는 고유하므로, 해당 키가 있으면 +1, 없으면 1로 초기화
    hashCounter[activity] = (hashCounter[activity] || 0) + 1;
  }
  return hashCounter;
}

console.log(countActivities(userLogs)); 
// 결과: { login: 2, view_page: 3, logout: 1 }

{
  // simpleHash : 속도는 빠르지만 tableSize의 범위가 좁아 해시값이 겹칠 수 있는 단점이 있음
  function simpleHash(str, tableSize) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        hash = hash + charCode;
    }

    return hash % tableSize;
  }

  /* 테스트 데이터 */
  const tableSize = 10;

  const inputs = [
      "apple",
      "banana",
      "grape",
      "apple1",
      "apple2"
  ];

  for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const hashValue = simpleHash(input, tableSize);

      console.log("입력:", input);
      console.log("해시값:", hashValue);
      console.log("-------------------");
  }
}

{
  // advancedHash : 해시 분산을 위해 소수점이 들어갈만한 숫자를 곱해주고(예:31) tableSize의 범위를 넓혀 해시값이 겹치지 않게 하여 보안성이 높아짐

  function advancedHash(str, tableSize) {
    let hash = 0;
    const PRIME = 31; // 해시 분산을 위한 소수 사용

    for (let i = 0; i < str.length; i++) {
        // 각 문자의 위치(i)에 따른 가중치를 부여하여 'apple1'과 '1apple'이 다른 값을 갖게 함
        hash = (hash * PRIME + str.charCodeAt(i)) % tableSize;
    }

    return hash;
  }

  /* 테스트 데이터 */
  // 테이블 크기를 적절히 키우는 것이 충돌 방지의 핵심입니다.
  const tableSize = 100;

  const inputs = [
      "apple",
      "banana",
      "grape",
      "apple1",
      "apple2",
      "orange",
      "melon"
  ];

  console.log(`--- 테이블 크기 ${tableSize}로 개선된 해시 결과 ---`);

  const results = {};

  inputs.forEach(input => {
      const hashValue = advancedHash(input, tableSize);
      console.log(`입력: ${input.padEnd(7)} | 해시값: ${hashValue}`);
      
      // 충돌 체크 로직
      if (results[hashValue]) {
          console.log(`[!] 충돌 발생: ${hashValue} (기존: ${results[hashValue]})`);
      }
      results[hashValue] = input;
  });
}

{
  // 암호학적 해시 알고리즘
  const crypto = require('crypto');

  function sha256(data) {
      return crypto.createHash('sha256').update(data).digest('hex');
  }

  const inputs = [
      "a",
      "hello",
      "안녕하세요",
      "이것은 해시 알고리즘 테스트입니다.",
      "JavaScript를 이용한 해시 함수 예제입니다. 입력 길이가 매우 길어도 출력은 항상 일정합니다."
  ];

  for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const hash = sha256(input);

      console.log("입력:", input);
      console.log("입력 길이:", input.length);
      console.log("해시:", hash);
      console.log("해시 길이:", hash.length);
      console.log("-----------------------------");
  }
}

{
  function simpleHash(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        hash = (hash * 31 + charCode) % 1000000007;
    }

    return hash;
  }

  console.log(simpleHash("hello"));
  console.log(simpleHash("hello1"));
}

{
  const crypto = require('crypto');

  const user = {
    id: "user1",
    passwordHash: sha256("1234")
  };

  function login(inputPw) {
      const inputHash = sha256(inputPw);
      if (inputHash === user.passwordHash) {
          console.log("로그인 성공");
      } else {
          console.log("로그인 실패");
      }
  }

  login("1234");
  login("1111");
}

{
  // 데이터 무결성 검증
  const originalData = "중요한 데이터";
  const storedHash = sha256(originalData);

  function verify(data, hash) {
      return sha256(data) === hash;
  }

  console.log("정상 데이터:", verify("중요한 데이터", storedHash));
  console.log("변조 데이터:", verify("중요한 데이터 변경", storedHash));
}

{
  // 해시 테이블 구현 (Key-Value 저장)
  class HashTable { // HashTable 클래스 생성
    constructor(size = 10) { // 클래스 인스턴스 생성 시 실행되는 초기화 함수 (기본 사이즈 10)
        this.table = new Array(size); // size 길이의 배열 생성해서 table에 저장
    }

    hash(key) { // hash 메서드 정의
        let hash = 0; // hash 0으로 초기화
        for (let i = 0; i < key.length; i++) { // 파라미터값 key의 길이만큼
            hash += key.charCodeAt(i); // hash에 key의 UTF-16 코드값 더해주기 (문자.charCodeAt(); : 특정 입력값을 UTF-16 코드값으로 변환하는 방법)
        }
        return hash % this.table.length; // key의 UTF-16 코드값을 table 배열의 길이값으로 나눈 나머지 반환
    }

    set(key, value) { // set 메서드 정의
        const index = this.hash(key); // index 변수에 key의 UTF-16 코드값을 table 배열의 길이값으로 나눈 나머지값 저장
        this.table[index] = value; // 계산된 index 값에 value값 저장
    }

    get(key) { // get 메서드 정의
        const index = this.hash(key); // index 변수에 key의 UTF-16 코드값을 table 배열의 길이값(10) 로 나눈 나머지값 저장
        return this.table[index]; // index 위치에 저장된 값 반환
    }
  }

  const ht = new HashTable(); // HashTable 클래스의 인스턴스 생성
  ht.set("name", "홍길동"); // ht 인스턴스의 set 메서드 호출 (key: name, value: 홍길동)
  ht.set("age", 30); // ht 인스턴스의 set 메서드 호출 (key: age, value: 30)

  console.log("name:", ht.get("name")); // ht 인스턴스의 get 메서드 호출 (key: name)
  console.log("age:", ht.get("age")); // ht 인스턴스의 get 메서드 호출 (key: age)
}

{
  const dataList = ["apple", "banana", "apple", "orange"];
  const hashSet = new Set();

  for (let item of dataList) {
      const h = sha256(item);
      if (hashSet.has(h)) {
          console.log("중복 발견:", item);
      } else {
          hashSet.add(h);
      }
  }
}

{
  function smallHash(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    return sum % 5;
  }

  const words = ["cat", "dog", "bag", "cab", "dad", "egg"];
  const resultMap = {};

  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const h = smallHash(word);

      if (!resultMap[h]) {
          resultMap[h] = [];
      }

      resultMap[h].push(word);
  }

  console.log("해시 결과:");
  console.log(resultMap);
}

{
  const crypto = require('crypto');

  function sha256(data) {
      return crypto.createHash('sha256').update(data).digest('hex');
  }

  function hashWithSalt(password, salt) {
      return sha256(password + salt);
  }

  const password = "1234";
  const salt1 = "ABC123";
  const salt2 = "XYZ999";

  const hash1 = hashWithSalt(password, salt1);
  const hash2 = hashWithSalt(password, salt2);
  const hash3 = hashWithSalt(password, salt1);

  console.log("비밀번호:", password);
  console.log("salt1 사용:", hash1);
  console.log("salt2 사용:", hash2);
  console.log("같은 salt1 다시 사용:", hash3);

  console.log("hash1 === hash2:", hash1 === hash2);
  console.log("hash1 === hash3:", hash1 === hash3);
}

{
  const crypto = require('crypto');

  function sha256(data) {
      return crypto.createHash('sha256').update(data).digest('hex');
  }

  function sendData(data) {
      const hash = sha256(data);
      return {
          payload: data,
          hash: hash
      };
  }

  function receiveData(packet) {
      const newHash = sha256(packet.payload);

      if (newHash === packet.hash) {
          console.log("무결성 검증 성공: 데이터가 변경되지 않음");
      } else {
          console.log("무결성 검증 실패: 데이터가 변경됨");
      }
  }

  const packet1 = sendData("송금금액:10000원");
  receiveData(packet1);

  const packet2 = sendData("송금금액:10000원");
  packet2.payload = "송금금액:90000원";
  receiveData(packet2);
}

{
  /**
   * - 정상 데이터 검증
   *    1. 로그인할때 비밀번호 체크 때
   *    2. 금융거래때 이체 정보 확인할때?
   *    3. 암호화 파일 전송할 때?
   * - 변조 데이터 검증
   *    1. 데이터 손상 여부 체크?
   *    
   */

  const crypto = require('crypto');

  // SHA-256 해시 함수 정의
  function sha256(data) {
      return crypto.createHash('sha256').update(data).digest('hex');
  } 

  const originalData = "중요한 데이터";
  // 원본 데이터의 해시값을 미리 생성하여 저장 (무결성 체크용)
  const storedHash = sha256(originalData);

  function verify(data, hash) {
      // 현재 데이터의 해시값과 저장된 해시값을 비교
      return sha256(data) === hash;
  }

  console.log("--- 데이터 무결성 검증 --- ");
  console.log("정상 데이터 검증:", verify("중요한 데이터", storedHash)); // true
  console.log("변조 데이터 검증:", verify("중요한 데이터 변경", storedHash)); // false
}

{
  class ChainingHashTable {
      constructor(size = 5) {
          this.table = new Array(size);
          for (let i = 0; i < size; i++) {
              this.table[i] = [];
          }
      }

      hash(key) {
          let sum = 0;
          for (let i = 0; i < key.length; i++) {
              sum += key.charCodeAt(i);
          }
          return sum % this.table.length;
      }

      set(key, value) {
          const index = this.hash(key);
          this.table[index].push({ key: key, value: value });
      }

      get(key) {
          const index = this.hash(key);
          const bucket = this.table[index];

          for (let i = 0; i < bucket.length; i++) {
              if (bucket[i].key === key) {
                  return bucket[i].value;
              }
          }

          return null;
      }

      print() {
          console.log(this.table);
      }
  }

  const fileTable = new ChainingHashTable(10);

  // 1. 아주 긴 텍스트(데이터) 자체를 키로 사용합니다.
  const bigData1 = "이것은 매우 용량이 크고 복잡한 문서 데이터의 내용입니다...";
  const bigData2 = "또 다른 별개의 리서치 자료 내용입니다...";

  // 2. 데이터 자체를 키로 삼아 관련 정보(메타데이터)를 저장합니다.
  fileTable.set(bigData1, { author: "홍길동", date: "2023-10-27", type: "PDF" });
  fileTable.set(bigData2, { author: "이순신", date: "2023-11-01", type: "DOCX" });

  // 3. 데이터를 다시 넣기만 하면, 그 데이터가 어디에 저장되었는지 몰라도 즉시 정보를 찾아옵니다.
  console.log("--- 데이터 기반 즉시 조회 ---");
  const searchResult = fileTable.get(bigData1);
  console.log("찾은 정보:", searchResult);

  // 4. 내용이 조금이라도 다르면 조회되지 않으므로 무결성 확인도 동시에 됩니다.
  console.log("내용 변경 시 조회 결과:", fileTable.get("다른 내용")); // null
}

{
  const crypto = require('crypto');

  // SHA-256 해시 함수 정의
  function sha256(data) {
      return crypto.createHash('sha256').update(data).digest('hex');
  }
  
  function hashWithSalt(password, salt) {
      return sha256(password + salt);
  }
  
  const salt = "ABC123";

  const user = {
      id: "user1",
      // 문자열 비밀번호를 해시화하여 저장
      passwordHash: hashWithSalt("1234", salt)
  };

  function login(inputPw) {
      // 입력받은 비밀번호를 똑같은 방식으로 해시화
      const inputHash = hashWithSalt(inputPw, salt);
      
      // 해시값끼리 비교 (원본 비밀번호는 알 수 없음)
      if (inputHash === user.passwordHash) {
          console.log("로그인 성공");
      } else {
          console.log("로그인 실패");
      }
  }

  login("1234"); // 성공
  login("1111"); // 실패
  
}