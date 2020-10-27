import React from 'react';
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';
import '../App.css';
function QuizArea(props) {
    if(props.isFinished){
        return <UserGreeting />
    }


    return (
        <div className="questionarea">
            <Question qno={props.qno} dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
            
        </div>
    )
}

export default QuizArea ;
