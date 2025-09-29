import React from 'react';
import BotImg from '../assets/Bot.webp';
import ProfileImg from '../assets/Profile.jpg';
import '../App.css';
export const Messages = ({ message, sender }) => {
  return (
    <div className={`message-by-${sender}`}>
      {sender === 'bot' && <img className="bot-im" src={BotImg} width="50" />}

      <div className="text-mes">
        {message}
      </div>

      {sender === 'user' && <img className="profile-im" src={ProfileImg} width={50} />}
    </div>
  );
};
