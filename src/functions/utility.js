export function notifyAlreadyEntered(setNotify) {
    setNotify(true);
    setTimeout(() => {
        setNotify(false);
    }, 1500);
}

export function isWinner(character, correctLetters, wrongLetters) {
    let win = 1;
    character.split('').forEach(letter => {
        if (!correctLetters.includes(letter)) {
            win = 0;
        }
    });
    if (wrongLetters.length === 6) {
        win = -1;
    }
    return win;
}