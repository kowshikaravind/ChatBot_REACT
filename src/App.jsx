import React, { useState } from "react";
import { Input } from "./components/Input";
import { ChatMessages } from "./components/ChatMessages";
import './App.css';
function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div>
      <ChatMessages chatMessages={chatMessages} />
      <Input
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
