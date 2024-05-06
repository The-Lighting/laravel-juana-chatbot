## https://the-lighting.github.io/laravel-juana-chatbot/

# Don't delete or merge any of the branches

## the main code that doesn't have any problems is in half branch
## this brach is main and it is broken

## Introduction

Welcome to the JustNexo Chatbot project! This chatbot is designed to enhance the user experience on our Learning Management System website.

## Getting Started

Follow these steps to set up and configure the chatbot on your local environment.

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js and npm (Node Package Manager)
- React

### Installation

1. Clone the repository:
```bash
    git clone <repository_url>
   cd justnexo-chatbot
```
2. Install dependencies
```bash
    npm install
```

### How the code works
anything you type in the message box will first go through the MessageParser.jsx which contain where to and what and how to answer the code 
here hello is set to rerender the first buttons. the chatbot won't remember what you had types if you refresh the window
The Config.js file contains all the rendering widgets and what to render the first time the chatbot is opened
    - here the config renders the initial message and base options of which you can find the declarations above 
    - all the buttons once clicked are set to trigger either a link(if LinkList is set there) or that will trigger a ActionProvider.js method which will contain how to handle a certain button

ActionProvider.js also contain the logic for sending the backend request to openai api
    - you will have to write all the handling of the buttons code here

For the future if you want to handle the smart responses you will need to do it in message parser

### how to add it to an existing project

you will need to handle how to download Laravel mix - https://letmegooglethat.com/q=how+to+download+laravel+mix+in+an+existing+laravel+project

The main declaration code for this is in resources/js/components/Chatbot.jsx

there are some not needed files but that can be resolved without issue. so no need to worry about that

ah! about adding the phpmailer service the readme is in the done branch of this repo so go through that
