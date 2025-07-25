import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const getRandomNumber = (): number => Math.floor(Math.random() * 100) + 1;

const Game: React.FC = () => {
    const [secretNumber, setSecretNumber] = useState<number>(getRandomNumber());
    const [guess, setGuess] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleGuess = () => {
        const num = Number(guess);

        if (isNaN(num) || num <= 0 || num > 100) {
        setMessage('Por favor, ingresa un número válido entre 1 y 100.');
        return;
        }

        if (num === secretNumber) {
            setMessage('¡Correcto! 🎉 Adivinaste el número.');
            setIsCorrect(true);
        } else if (num > secretNumber) {
            setMessage('Demasiado alto. Intenta de nuevo.');
        } else {
            setMessage('Demasiado bajo. Intenta de nuevo.');
        }
    };

    const restartGame = () => {
        setSecretNumber(getRandomNumber());
        setGuess('');
        setMessage('');
        setIsCorrect(false);
    };

    return ( 
        <div>
            <InputNumber 
                guess={guess} 
                setGuess={setGuess} 
                handleGuess={handleGuess} 
                isCorrect={isCorrect} 
            />
            <Message text={message} />
            { isCorrect && <RestartButton restartGame={restartGame} /> }
        </div>
    );
};

export default Game;