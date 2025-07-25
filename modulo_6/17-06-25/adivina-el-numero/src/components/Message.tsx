import React from 'react';

interface MessageProps {
    text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
    if (!text) return null; // Si no hay texto, no se muestra el mensaje

    return (
        <div className='message'>
            <p>{text}</p>
        </div>
    );
};

export default Message;