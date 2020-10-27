import React from 'react'
import Answer from './Answer';
import '../App.css';

function AnswerList(props) {
    const options = [];
    for ( let i = 0; i < props.dataSet.options.length; i++){
        options.push(<Answer handleClick={props.handleClick} choice={i} ano={i+1} answer={props. dataSet.options[i]} />);
    }
    return (
        <div className="answerlist">
         {options}
        </div>
    )
}

export default AnswerList ;
