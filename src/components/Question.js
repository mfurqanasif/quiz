import React from 'react';
import '../App.css';

function Question(props) {

    

    return (
        <div className="question">
            <h3>Question: {props.qno +1} </h3>
            <h1>{props.dataSet.question}</h1>
        </div>
    )
}

export default Question;
