const helloAndRestart = ["hello", "hi", "hola", "hey"]; // Added the 'any' keyword

class
 
MessageParser
 
{
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (helloAndRestart.some((word) => lowerCaseMessage.includes(word))) {
      this.actionProvider.greet();
    }else{
      this.actionProvider.handleGPTResponse(message);
    }
  }
  

}

export default MessageParser;