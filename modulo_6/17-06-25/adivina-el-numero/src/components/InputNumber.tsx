import React from 'react';

interface InputNumberProps {
    guess: string;
    setGuess: (value: string) => void;
    handleGuess: () => void;
    isCorrect: boolean;
}

const InputNumber: React.FC<InputNumberProps> = ({ guess, setGuess, handleGuess, isCorrect }) => {
    return (
        <div className='input-container'>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={isCorrect}
                placeholder="Ingresa un número"
            />
            <button onClick={handleGuess} disabled={isCorrect || guess === ''}>
            Adivinar
            </button>
        </div>
    );
};

export default InputNumber;