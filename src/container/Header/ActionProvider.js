//triggers for JAmbaChatbot
class ActionProvider {
    constructor(createChatBotMessage) {
      this.createChatBotMessage = createChatBotMessage;
    }
  
    greet() {
      const message = this.createChatBotMessage('Hello, I am JambaDevAI! How can I help you?');
      this.updateChatbotState(message);
    }
  
    help() {
      const message = this.createChatBotMessage(
        'Sure, I can help! I am a handy bug, What do you need assistance with?'
      );
      this.updateChatbotState(message);
    }
  
    unknown() {
      const message = this.createChatBotMessage(
        "I'm sorry, I didn't understand. Can you please try again?"
      );
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;