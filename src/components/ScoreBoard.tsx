import React from 'react';

type ScoreEntry = {
    nsRoundScore: number,
    ewRoundScore: number,
    nsCumulativeScore: number,
    ewCumulativeScore: number
}

type ScoreBoardProps = {
    scores: ScoreEntry[],
    style?: any
}

const cellBorderStyle = {
    border: 'solid',
    borderColor: 'gray',
    borderWidth: '1px',
    padding: '3px'
}

function RoundScore(score: ScoreEntry) {
    return (
        <div>
            <div style={{
                display: 'flex',
            }}>
                <div style={cellBorderStyle}>{score.nsRoundScore}</div>
                <div style={cellBorderStyle}>{score.ewRoundScore}</div>
            </div>
            <div style={{
                display: 'flex', borderTop: 'solid'
            }}>
                <div style={cellBorderStyle}>{score.nsCumulativeScore}</div>
                <div style={cellBorderStyle}>{score.ewCumulativeScore}</div>
            </div>
        </div>
    );
}
function ScoreBoard(props: ScoreBoardProps) {
    return (
        <div style={props.style}>
            <div>
                <div style={{
                    display: 'flex',
                }}>
                    <div style={cellBorderStyle}>NS</div>
                    <div style={cellBorderStyle}>EW</div>
                </div>
            </div>
            {props.scores.map((score) => RoundScore(score))}
        </div>
    );
}

export default ScoreBoard;
