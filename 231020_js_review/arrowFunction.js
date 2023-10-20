const name = "Max";
let age = 29;
const hasHobbies = true;

// let로 변수 선언하면 변경(재할당)이 가능하다
age = 30;

// 익명 함수
const summarizeUser = function (userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is" +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));

// 화살표 함수
// 길이가 짧아짐
// this 키워드 사용
const summarizeUser1 = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is" +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
};

// {} return문 생략 - 문장이 하나만 있다면
const add = (a, b) => a + b;
console.log(add(1, 2));

// 인수가 하나라면 괄호 없이도 가능
const addOne = (a) => a + 1;
console.log(addOne(3));

// 인수가 없는 경우, 빈 괄호는 명시적으로 사용
const addRandom = () => 1 + 3;
console.log(addRandom());

console.log(summarizeUser1("jw", 30, false));
