import React from 'react'
const Wrong = ({ wrongLetters}) => {
    return (
        <div class="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 &&
                    <p>Letters guessed wrong</p>
                }
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    )
}

export default Wrong