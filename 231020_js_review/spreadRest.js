// 모던 자바스크립트란?
// 개발자들이 비공식적으로 ES6와
// 그 이후의 판을 구현한 자바스크립트 ->‘모던 자바스크립트’

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// 배열이나 객체에서 요소나 프로퍼티를 가져올 시
// 전개 연산자
const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];

// const copiedArray = hobbies.slice()
const copiedArray = [...hobbies];
console.log(copiedArray);

// 여러 인수를 배열하나로 병합하고
// 함수의 인수 목록에서 사용할 시
// 나머지 연산자

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
