import React, { useEffect } from 'react';
import { isWinner } from '../functions/utility';

const Result = ({ selectedCharacter, correctLetters, wrongLetters, setPlaying, playAgain }) => {
    let message = '';
    let reveal = '';
    let playing = true;

    

    if (isWinner(selectedCharacter, correctLetters, wrongLetters) === 1) {
        message = 'Sugoi! Good job!';
        reveal = `The character was indeed ${selectedCharacter}.`;
        playing = false;
    } else if (isWinner(selectedCharacter, correctLetters, wrongLetters) === -1){
        message = 'Hangman! Gomen! You lost!';
        reveal = `The character was ${selectedCharacter}.`;
        playing = false;
    }

    useEffect(() => setPlaying(playing));

    //const imageName = selectedCharacter + '.png';
    //const filePath = `../../public/images/${imageName}`;
    //const fileUrl = require(filePath);

    return (
        <div className="popup-container" style={message !== '' ? { display: 'flex' } : {}}>
            <div className="popup">
                <h2>{message}</h2>
                <h3>{reveal}</h3>
                <div className = "anime-image">
                    <img src={`hangman/images/${selectedCharacter}.png`} />
                </div>
                <button onClick={playAgain}>Go Again</button>
            </div>
        </div>
    )
}

export default Result