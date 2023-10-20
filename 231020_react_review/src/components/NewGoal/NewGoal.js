import React from "react";

import './NewGoal.css';

const NewGoal = () => {
    const addGoalHandler = event => {
        // 브라우저 기본 값이 백엔드 요청 보내는 것을 막음
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new goal!'
        };
        console.log(newGoal);
    };

    return ( 
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">목표 추가하기</button>
    </form>
    );
};


export default NewGoal;
