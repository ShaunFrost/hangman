import react, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrong from './components/Wrong';
import Word from './components/Word';
import Result from './components/Result';
import Notification from './components/Notification';
import { notifyAlreadyEntered } from './functions/utility';
import './App.css';

const characters = ['natsu', 'naruto', 'fubuki', 'laxus', 'gohan', 'goku', 'vegeta', 'kakashi', 'minato'];
let selectedCharacter = characters[Math.floor(Math.random() * characters.length)];



function App() {
    const [playing, setPlaying] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [notify, setNotify] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playing) {
                if (keyCode >= 65 && keyCode <= 90) {
                    const letter = key.toLowerCase();
                    if (selectedCharacter.includes(letter)) {
                        if (!correctLetters.includes(letter)) {
                            setCorrectLetters(currentLetters => [...currentLetters, letter]);
                        } else {
                            notifyAlreadyEntered(setNotify);
                        }
                    } else {
                        if (!wrongLetters.includes(letter)) {
                            setWrongLetters(currentLetters => [...currentLetters, letter]);
                        } else {
                            notifyAlreadyEntered(setNotify);
                        }
                    }
                }
            }
            
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playing]);

    function playAgain() {
        setPlaying(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * characters.length);
        selectedCharacter = characters[random];
    }


  return (
    <>
          <Header />
          <div className="game-container">
              <Figure wrongLetters={wrongLetters}/>
              <Wrong wrongLetters={wrongLetters}/>
              <Word selectedCharacter={selectedCharacter} correctLetters={correctLetters} />
          </div>
          <Result selectedCharacter={selectedCharacter} correctLetters={correctLetters} wrongLetters={wrongLetters} setPlaying={setPlaying} playAgain={playAgain} />
          <Notification notify={notify} />

    </>
  );
}

export default App;
