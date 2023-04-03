import React from 'react';
import Chatbot from "react-chatbot-kit";
//configuration
const config = {
    botName: 'JambaDev',
    lang: 'en',
    customStyles: {
      botMessageBox: {
        backgroundColor: '#FFFFFF',
      },
      chatButton: {
        backgroundColor: '#0e71b3',
      },
    },
    initialMessages: [
      {
        id: 'welcome',
        message: 'Hello, I am your virtual assistant. How can I assist you?',
        trigger: 'user-query',
      },
    ],
    state: {},
  };
  
  export default config;