import React from 'react';
import TotalCorrect from './TotalCorrect';
import TotalInCorrect from './TotalInCorrect';
import '../App.css';

function ScoreArea(props) {
    return (
        <div className="scorearea">
            <h2>Score</h2>
            <div className="set">
            <TotalCorrect correct={props.correct} />
            <TotalInCorrect inCorrect={props.inCorrect} />
            </div>
        </div>
    )
}

export default ScoreArea;
