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
    const [attempts, setAttempts] = useState<number>(0);
    const [history, setHistory] = useState<number[]>([]);

    const handleGuess = () => {
        const num = Number(guess);

        if (isNaN(num) || num <= 0 || num > 100) {
        setMessage('Por favor, ingresa un número válido entre 1 y 100.');
        return;
        }

        setAttempts((prev) => prev + 1);
        setHistory((prev) => [...prev, num]);

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
        setAttempts(0);
        setHistory([]);
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
            <p>Intentos: {attempts}</p>

            {history.length > 0 && (
                <div>
                    <p>Historial de intentos:</p>
                    <ul>
                        {history.map((num, index) => (
                            <li key={index}>#{index + 1}: {num}</li>
                        ))}
                    </ul>
                </div>
            )}

            { isCorrect && <RestartButton restartGame={restartGame} /> }
        </div>
    );
};

export default Game;