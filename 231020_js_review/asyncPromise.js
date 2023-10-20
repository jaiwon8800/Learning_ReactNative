// 비동기식 코드 ?
// 즉시 완료 되지 않고 대기 상태를 가진다면-

// new 키워드
// 생성자를 통해 신규 객체를 만드는 키워드

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000); // 2초 = 2000밀리초

// 동기식 코드
console.log("Hello");
console.log("Hi");
