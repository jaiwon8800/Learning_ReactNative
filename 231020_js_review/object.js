// const person = {
//     name: 'Max',
//     age: 29,
//     greet: function() {
//         console.log('Hi, I am '+ this.name);
//     }
// };

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

// 객체를 참조하는 this를 쓸 때, 상수에 저장된 객체를 참조할 때
