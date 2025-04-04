# React Study - Concepts Project

This repository was created to study React concepts. Credits to Youtube Chanel "Tech With Tim" how offer an excellent tutorial;
## Prerequisites

- [Node.js](https://nodejs.org/) (recommended LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An account on [The Movie Database (TMDB)](https://www.themoviedb.org/) to obtain your API_KEY

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/pedrofrs/movie-search-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you prefer:
   ```bash
   yarn install
   ```

## API Configuration

This project uses data from [The Movie Database (TMDB)](https://www.themoviedb.org/). To make requests work correctly, you need to obtain your own API_KEY by following these steps:

1. Go to [TMDB](https://www.themoviedb.org/) and create an account (if you don't have one yet).
2. After logging in, generate your API_KEY in your account settings.
3. Open the `api.js` file and on **line 1**, replace the example key with your API_KEY:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
   **Example:**
   ```javascript
   const API_KEY = "522fb1c206b8cedf56f0fbf3812fee20";
   ```

## How to Use the Project

1. **Start the development server**:
   ```bash
   npm start
   ```
   or, if using yarn:
   ```bash
   yarn start
   ```
2. **Access the application**:
   Open your browser and visit ` http://localhost:5173/` to view the application in action.
3. **Explore the examples**:
   Navigate through the components and experiments to understand how React concepts are applied. The code is commented and organized for better learning.

   