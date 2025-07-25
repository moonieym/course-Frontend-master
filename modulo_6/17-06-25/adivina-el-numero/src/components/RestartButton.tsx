import React from 'react';

interface RestartButtonProps {
    restartGame: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ restartGame }) => {
  return (
    <div className="restart-button">
      <button onClick={restartGame}>
        Jugar de nuevo 🔁
      </button>
    </div>
  );
};

export default RestartButton;