import React, { useState } from "react";

export const Input = ({ chatMessages, setChatMessages }) => {
  const [input, setInput] = useState("");

  function saveMessage(e) {
    setInput(e.target.value);
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: input,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      
      if (!res.ok) {
        throw new Error("Word not found");
      }

      const data = await res.json();

      const botReply =
        data[0]?.meanings[0]?.definitions[0]?.definition ||
        "No definition found.";

      setChatMessages([
        ...newChatMessages,
        {
          message: botReply,
          sender: "bot",
          id: crypto.randomUUID(),
        },
      ]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }

    setInput("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="input-container">
      <input
        placeholder="Enter a word..."
        onChange={saveMessage}
        onKeyDown={handleKeyPress}
        value={input}
        className="text-input"
      />
      <button onClick={sendMessage} className="send-button">
        Search
      </button>
    </div>
  );
};
