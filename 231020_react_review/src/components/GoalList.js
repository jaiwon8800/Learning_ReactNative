import React from "react"; // 안쓰면 JSX 구문을 쓸 수 없음
import "./GoalList.css";

const GoalList = (props) => {
  //   console.log(props.goals);
  //   return <ul className="goal-list">{[<li>Hi</li>, <li>작동중이에요.</li>]}</ul>;
  
  // 기본 JavaScript 객체를 JSX에서 출력할 수 없음
//   return <ul className="goal-list">{props.goals}</ul>;
  return <ul className="goal-list">{
    props.goals.map((goal) => {
        // 렌더링 하는 모든 리스트 아이템에는 key 프로퍼티를 추가해야 함
        return <li key={goal.id}>{goal.text}</li>
    })

  }</ul>;
};

export default GoalList;
