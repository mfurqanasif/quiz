import React from 'react';
import '../App.css';

function Answer(props) {
return (<button className="answer" type="button" onClick= { () =>props.handleClick(props.choice)}>{props.ano}    {props.answer}</button>)
}

export default Answer;
