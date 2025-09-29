import React, { useRef, useEffect } from 'react';
import { Messages } from './Messages';
import '../App.css';
export const ChatMessages = ({ chatMessages }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div ref={ref} className="chat-messages-container">
      {chatMessages.map((chatMessage) => (
        <Messages
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
};
