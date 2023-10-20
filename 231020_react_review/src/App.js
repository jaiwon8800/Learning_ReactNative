import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

// 함수형 컴포넌트를 사용

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "강의 수료하기" },
    { id: "cg2", text: "강의 핵심 주제 학습하기" },
    { id: "cg3", text: "질의응답 섹션에서 질문 많이 하기" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));

    // 상태 업데이트가 이전 상태의 데이터에 의존할 때 사용하면 안전함
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>강의 과정 목표</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1 title='인삿말'>안녕하세요.</h1>
// {
/* -> React.createElement('h1', {title: '인삿말'}, ...) 변환되었기 때문에 작동함*/
// }
// {
/* {} 빈객체는 생성한 DOM 노드에 설정할 속성이나 프로퍼티를 작성한 것임 */
// }
//     </div>
//   );
// }

//class App extends React.Component{
//  render(){
//    return <h1 title='인삿말'>안녕하세요.</h1>
//  }
//}
