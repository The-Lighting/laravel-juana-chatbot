# JustNexo Chatbot

## Introduction

Welcome to the JustNexo Chatbot project! This chatbot is designed to enhance the user experience on our Learning Management System website.

## Getting Started

Follow these steps to set up and configure the chatbot on your local environment.

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js and npm (Node Package Manager)
- React
- PHP
- Composer
  
### Installation

1. Clone the repository and navigate into the project directory:

   ```
   git clone <repository_url>
   ```
   ```
   cd <respository_name>
   ```

2. Ensure Node.js and npm are installed. If not, download and install them from [here](https://nodejs.org/).

3. Install project dependencies:

   ```
   npm install
   ```
4. Build the webpack if not already created:
   ```
   npm run dev
   ```
5. Install composer:
   ```
   composer install
   ```

6. Rename `.env.example` to `.env`.

7. Generate the `APP_KEY` value:

   ```
   php artisan key:generate
   ```

8. Start the local server:
   ```
   php artisan serve
   ```
