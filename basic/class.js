{
  class User {
      constructor(name, age, mbti) {
          this.name = name; // 인스턴스 프로퍼티
          this.age = age;
          this.mbti = mbti;
      }
      // 프로토타입 메서드
      sayHello() {
          return `안녕하세요, 저는 ${this.name}입니다.`;
      }
      // 자기소개 메서드
      method1 () {
          return `저는 ${this.age}살 입니다.`
      }
      // 자기소개 메서드
      method2 () {
          return `제 mbti는 ${this.mbti}입니다.`
      }
  }
  const kim = new User("김철수", 20, "mbti");
  console.log(kim); 
  console.log(kim.sayHello());
  console.log(kim.method1());
  console.log(kim.method2()); 

  // 상속과 super의 활용
  class Manager extends User {
    constructor(name, department) {
        // 부모 클래스의 생성자 호출
        super(name); 
        this.department = department;
    }

    // 부모 메서드 확장 (Overriding)
    sayHello() {
        return `${super.sayHello()} 소속은 ${this.department}입니다.`;
    }
  }

  const lee = new Manager("이영희", "개발팀");
  console.log(lee.sayHello()); // 안녕하세요, 저는 이영희님입니다. 소속은 개발팀입니다.

  class MathUtils {
      static calculateTax(price) {
          return price * 0.1;
      }
  }

  // 인스턴스 생성 없이 클래스에서 직접 호출
  console.log(MathUtils.calculateTax(10000)); // 1000 (박지민의 결제 예시)
}


{
  // 실습1. 클래스 기본 구조 설계
  class Student { // 클래스 Student 생성
    constructor (name, grade) { // 인스턴스를 생성하고 초기화
      // this는 객체 자기 자신 {name(key) : name에 들어갈 값 (value)}
      this.name = name;
      this.grade = grade;
    }
    // 자기소개 메서드 정의
    introduce() { // 자동으로 해당 클래스의 prototype에 등록
      return `저는 ${this.grade}학년 ${this.name}입니다.`;
    }
  }
  const studentA = new Student("최현우", 3); // studentA 변수에 Student 인스턴스 생성
  console.log(studentA); // Student { name: '최현우', grade: 3 }

  // studentA.introduce() : Studnet 클래스의 introduce() 메서드 호출
  console.log(studentA.introduce()); // 저는 3학년 최현우입니다.

  // 실습2: 클래스 상속과 super 호출
  class ClubMember extends Student { //  ClubMember 클래스를 생성하여 Student의 모든 속성 상속
    constructor(name, grade, clubName) { // 인스턴스를 생성하고 초기화
        super(name, grade); // (함수형 호출) 부모 클래스 Student의 constructor 호출
        this.clubName = clubName; // ClubMember 자기 자신의 인스턴스 생성
    }

    // 부모 메서드 확장 (Overriding)
    introduce() {
        // super.introduce(): (참조형 호출) 부모 클래스 Student의 메서드(introduce())에 직접 접근
        return `${super.introduce()} 동아리는 ${this.clubName}입니다.`; 
    }
  }

  const memberA = new ClubMember("임윤아", 2, "댄스부"); // memberA 변수에 ClubMember 인스턴스 생성
  console.log(memberA) // ClubMember { name: '임윤아', grade: 2, clubName: '댄스부' }
  console.log(memberA.introduce());


  // 실습 3. 정적 메서드 구현
  class DateConverter { // DateConverter 클래스 생성
    static formatDate(year, month, day) { // 클래스에 직접 묶인 메서드 정의
        const mm = month < 10 ? `0${month}` : month; // month가 0보다 작으면 0{month}, 아니면 month
        const dd = day < 10 ? `0${day}` : day; // day가 10보다 작으면 0{day}, 아니면 day
        return `${year}-${mm}-${dd}`; // 연도-월-일 반환
    }
  }
  // DateConverter 클래스의 정적 메서드 formatDate 호출
  console.log(DateConverter.formatDate(2026, 3, 22)); // "2026-03-22"
}