import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './TypingText.scss';
import { RiChatSmileAiLine } from 'react-icons/ri';

interface TypingTextProps {
  texts: string[];
}

const TypingText: React.FC<TypingTextProps> = ({ texts }) => {
  return (
    <div className="typing-text">
      <span className="typing-text__prefix"><RiChatSmileAiLine className='typing-text__icon'/></span>
      <span className="typing-text__content">
        <Typewriter
          words={texts}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </span>
    </div>
  );
};

export default TypingText;