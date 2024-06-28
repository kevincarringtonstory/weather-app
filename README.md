# Weather App

## Overview

The Weather App is a simple React application that fetches and displays weather information from the OpenWeatherMap API. Users can input a city name to get the current weather, including temperature, humidity, and weather conditions.

## Features

- Fetch and display current weather information based on user input
- Shows city name, temperature, humidity, and weather condition
- Uses multiple React components
- Utilizes `useState`, `useEffect`, and props for state management and data passing
- Fetch for making HTTP requests
- Basic user interface with a heading, input field, and weather details

## Getting Started

### Prerequisites

- Node.js and npm installed
- OpenWeatherMap API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. Add `.env` to your `.gitignore` file to ensure it is not tracked by Git:

   ```gitignore
   .env
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to see the app in action.

### Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The app will fetch and display the current weather information for the specified city.

### Project Structure

- `src/App.js`: Main component that manages state and fetches weather data.
- `src/CityInput.js`: Component for the input field to set the city.
- `src/WeatherInfo.js`: Component for displaying weather information.
- `src/index.js`: Entry point of the React application.
- `public/index.html`: HTML template with the browser title set to "Weather App".

### Example Commit Messages

- `Initialize project with basic structure`
- `Add functionality to fetch and display current weather data`
- `Fix issue with incorrect temperature display`
- `Improve UI styling for weather information display`
- `Add README file with project overview and setup instructions`
- `Refactor API call logic for better readability`

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [React](https://reactjs.org/)

## Contact

Created by Kevin Carrington (https://github.com/kevincarringtonstory) - feel free to contact me!
