// es6 문법 let, const
// 변경의 여지가 있는 변수 -> let
// 변경하면 안되는 변수 -> const
// => 재할당(immutable) 가능 여부 (값을 재할당한다, 안 한다)

const name = "Max";
let age = 29;
const hasHobbies = true;

// let로 변수 선언하면 변경(재할당)이 가능하다
age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is" +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser("jw", 30, false));

// 그럼 es6 이전 문법인 var 키워드의 문제점이 뭐가 있었길래
// let과 const가 등장했는가?
// 1. var로 변수 선언 시 var키워드 생략 가능
chicken = "nice";
console.log(chicken);

// 2. var로 변수 선언 후 중복 선언 가능
var chicken = "nice";
console.log(chicken);
var chicken = 1;
console.log(chicken);

// 3. 변수가 선언 되지도 않았는데 참조 가능 (변수 호이스팅)
console.log(chicken);
var chicken = "nice";
console.log(chicken);

// 4. function-level-scope
// var는 함수 코드 불록 ({})만 Scope로 인정하기 때문에 함수외부에서 선언된 모든 변수는 전역변수다
