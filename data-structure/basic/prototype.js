// 1. 생성자 함수를 통한 프로토타입 공유
function Person(name) { // 생성자 함수 Person 선언
   // this 새로 만들어지는 객체
   // Person을 new로 호출할때마다 this가 새로 만들어져 name을 호출한 인스터스마다 따로 저장
    this.name = name;
}

// 모든 Person 인스턴스가 공유할 메서드 정의
Person.prototype.sayHello = function() { // 오직 함수 객체만 가짐 (재사용성)
    return `안녕하세요, 저는 ${this.name}입니다.`;
};

const kim = new Person("김철수"); // 생성자 함수 호출 후 변수 kim에 저장
const lee = new Person("이영희"); //  생성자 함수 호출 후 변수 lee에 저장

console.log(kim.sayHello()); // 안녕하세요, 저는 김철수입니다.
console.log(kim.sayHello === lee.sayHello); // true (메모리 주소 공유)
// 메모리 주소를 공유하지만 메서드 실행시 값은 this가 가르키는 각 인스턴스에 저장되기 때문에 값이 다 다름


// 2. __proto__와 prototype의 실체 확인

// 생성자 함수 자체는 Function의 인스턴스입니다.
// 생성자함수.prototype : 안의 내용들을 쓰라는 큰 덩어리의 설계
// 자식객체.__proto__ : 내 부모는 이 설계도이다 

function Student(name) {  // 생성자 함수 Student 선언
    this.name = name;
}

const park = new Student("박지민"); // 생성자 함수 호출 후 변수 park에 저장

// 인스턴스의 부모(__proto__)는 생성자 함수의 설계도(prototype)와 같습니다.

// 변수 park에 Student 생성자 함수를 호출함 (park의 부모는 student?)
// Student.prototype 난 설계도
// park.__proto__는 부모(Student.prototype)의 설계도
console.log(park.__proto__ === Student.prototype); // 둘다 Student 설계도를 의미하기 때문에 true


// Student.__proto__ 는 부모(Function.prototype)의 설계도 
// Function.prototype 난 설계도 
console.log(Student.__proto__ === Function.prototype); // 둘다 Function 설계도를 의미하기 때문에 true



// 3. 프로토타입 체인을 이용한 상속
const animal = { // animal 객체 정의
    eats: true,
    walk() {
        return "동물이 걷습니다."; // animal.walk 반환값
    }
};

// __proto__ : 현재 객체를 있게 한 실제 부모 객체를 가리키는 링크
const rabbit = {
    jumps: true,
    __proto__: animal // rabbit의 부모( __proto__)를 animal로 설정
};

console.log(rabbit.eats); // rabbit의 부모(animal)의 eats는 true다
console.log(rabbit.walk()); // rabbit의 부모(animal)의 walk는 "동물이 걷습니다."