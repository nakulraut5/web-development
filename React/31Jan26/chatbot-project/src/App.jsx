
import './App.css'
import { useState } from 'react';
import userImage from './assets/user.png';
import robotImage from './assets/robot.png';
import { Chatbot } from 'supersimpledev'
function ChatMessageInput({ chatMessages, setChatMessages }) {
  const [inputMessage, setInputMessage] = useState('');
  function updateInputText(event) {
    setInputMessage(event.target.value);

  }
  function sendMessage() {
    const newChatMessage = [
      ...chatMessages, {
        sender: 'user',
        message: inputMessage,
        id: crypto.randomUUID()
      }
    ];
    const response = Chatbot.getResponse(inputMessage);
    setChatMessages([
      ...newChatMessage, {
        sender: 'robot',
        message: response,
        id: crypto.randomUUID()
      }
    ])
    setInputMessage('');
  }
  return (
    <>
      <input onChange={updateInputText} value={inputMessage} placeholder='Enter the message'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  );

}
function ChatMessage({ sender, message }) {
  return (
    <div>
      {sender === 'robot' && <img src={robotImage} width="50px" />}
      {message}
      {sender === 'user' && <img src={userImage} width="50px" />}
    </div>
  );
}
function ChatMessages({ chatMessages }) {


  return (
    <div>
      {
        chatMessages.map((message) => {
          return (
            <ChatMessage
              sender={message.sender}
              message={message.message}
              key={message.id}
            />
          );
        })
      }
    </div>
  );
}

function App() {

  const [chatMessages, setChatMessages] = useState([{
    sender: 'user',
    message: 'Hello',
    id: 'id01'
  },
  {
    sender: 'robot',
    message: 'Hello, how can I help you?',
    id: 'id02'
  }
  ]);


  return (
    <>
      <ChatMessageInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
    </>
  );
}

export default App
