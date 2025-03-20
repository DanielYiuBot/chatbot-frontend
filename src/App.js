import React, { useState } from "react";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleSend = async () => {
    if (!userInput) return;

    try {
      const response = await axios.post("http://35.94.110.73:8000/chat", {
        message: userInput,
      });
      setChatResponse(response.data.response);
    } catch (error) {
      console.error("Error:", error);
      setChatResponse("Error communicating with chatbot.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Chatbot</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Send
      </button>
      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", minHeight: "50px" }}>
        <strong>Chatbot:</strong> {chatResponse}
      </div>
    </div>
  );
}

export default App;
