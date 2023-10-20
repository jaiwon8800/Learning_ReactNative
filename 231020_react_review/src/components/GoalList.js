import React from "react"; // 안쓰면 JSX 구문을 쓸 수 없음
import './GoalList.css';

const GoalList = props => {
  console.log(props.goals);
  return (
    <ul className="goal-list">
    </ul>
  );
};

export default GoalList;
