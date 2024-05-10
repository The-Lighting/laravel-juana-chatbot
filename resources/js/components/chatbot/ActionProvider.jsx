// import GameBasedLearning from '../components/kindsofcoursesoptions/GameBasedLearning'
// import ExperientialLearning from '../components/kindsofcoursesoptions/ExperentialLearning';
import IframeWidget from '../components/iframe/IframeWidget';
import ModalWidget from '../components/iframe/ModalWidget';
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "How could I help you today? Please select among the following options for me to assist you better",
      {
        widget: "BaseOptions",
      },
    );
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here
    // actually manipulates the top level state of the Chatbot, so it's
    // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  handleLMS = () => {
    const message = this.createChatBotMessage(
      "Sure! You can access our Learning Management System (LMS) by clicking the button below:",
      {
        widget: "HeadToLMS",
      },
    );

    this.updateChatbotState(message);
    //this.showMainMenu();
  };
  handleCourse = () => {
    const message = this.createChatBotMessage(
      "Fantastic, Please tell me about what kind/name of course you are asking for:",
      {
        widget: "CertainCourse",
      },
    );

    this.updateChatbotState(message);
    //this.showMainMenu();
  };
  handleStore = () => {
    const message = this.createChatBotMessage(
      "if you have any issues with the products page please contact the team.",
      {
        widget: "HeadToStore",
      },
    );
    this.updateChatbotState(message);
    //this.showMainMenu();
  };
  handleInstructor = () => {
    const message = this.createChatBotMessage(
      "We take good care of selecting good Instructors for our affiliated students. Please find more information on the official website",
      {
        widget: "HeadToInstructors",
      },
    );

    //handle session details
    this.updateChatbotState(message);

    //this.showMainMenu();
  };
  handleForum = () => {
    const message = this.createChatBotMessage(
      "i think you should head to forums to find what you are looking for",
      {
        widget: "headToForum",
      },
    );

    this.updateChatbotState(message);
  };
  
  handlerequestcb = () => {
    // Create a message for "Request a Callback form"
    const callbackMessage = this.createChatBotMessage("Form for requesting a callback has been opened.");

    // Create a modal message containing the iframe and the callback message
    const iframeModalMessage = this.createChatBotMessage(
        <ModalWidget onClose={() => this.closeModal()}>
                <IframeWidget src="https://forms.office.com/Pages/ResponsePage.aspx?id=sN105GbtaUSGllpAibkG__CiVxyYxO1IrHff89pCqexUQ0tIMTFaTTA4MFI3TjcyN1NQQkVBSkEwRCQlQCN0PWcu&embed=true" width="800px" height="600px" style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} />
        </ModalWidget>
    );
	// Update chatbot state to display the callback message
	this.updateChatbotState(callbackMessage);
    // Update chatbot state to display the modal message
    this.updateChatbotState(iframeModalMessage);
};

  handlecontactus = () => {
    const message = this.createChatBotMessage(
      "Tel: +91 11 4100 4112       Email: support@justnexo.com         JUANA TECHNOLOGIES PVT. LTD.",
      {
          widget: "contactus",
      }
    );

    this.updateChatbotState(message);

};

  //implementing other courses
  handlegamebasedlearning = () => {
    const message = this.createChatBotMessage(
      "we provide courses which handle learning of the child via fun games. if you would like to learn more please consider a vist to our special page for more information",
      {
        widget: "gamebasedlearninglink",
      },
    );
    this.updateChatbotState(message);

    //this.showMainMenu();
  };
  handlexperientiallearning = () => {
    const message = this.createChatBotMessage(
      "In this kind of learning we emphasize on the learning of things like robotics by actually creating them. for more information-",
      {
        widget: "experientiallearning",
      },
    );
    this.updateChatbotState(message);

    //this.showMainMenu();
  };
  handlepersonaldevelopment = () => {
    const message = this.createChatBotMessage(
      "Learn Personal Development or improve your skills online today. Choose from a wide range of Personal Development courses offered by us",
      {
        widget: "personalDevelopment",
      },
    );
    this.updateChatbotState(message);
   // this.showMainMenu();
  };

  handleGPTResponse = (userInput) => {
    try {
      // Replace this with the actual URL of your Express server
      const expressServerUrl = "http://localhost:3000/chat";

      // Make a POST request to the Express server using Axios
      axios
        .post(expressServerUrl, {
          userInput: userInput,
        })
        .then((response) => {
          // Get the bot response from the response data
          const botResponse = response.data.botResponse;

          // Create a chatbot message with the bot response
          const message = this.createChatBotMessage(botResponse);

          // Update the chatbot state with the message
          this.updateChatbotState(message);
        })
        .catch((error) => {
          console.error("Error sending request to Express server:", error);
        });
    } catch (error) {
      console.error("Error sending request to Express server:", error);
    }
  };
  handleJuanaNexo = () => {
    const message = this.createChatBotMessage(
      "Our Parent Company is JuanaTech, here is the link to our Introduction on their domain",
      {
        widget: "headtoJuanaNexo",
      },
    );
    this.updateChatbotState(message);
   //this.showMainMenu();
  };
  handleCertificate = () => {
    const message = this.createChatBotMessage(
      "Here is the link to the webpage to handle Certicate Verification",
      {
        widget: "headToCertificate",
      },
    );
    this.updateChatbotState(message);

    //this.showMainMenu();
  };

  showMainMenu() {
    const mainMenu = this.createChatBotMessage("Main Menu", {
      widget: "BaseOptions",
    });
    this.updateChatbotState(mainMenu);
  } // not being used

  //implement till here
}

export default ActionProvider;