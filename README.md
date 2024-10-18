## Introduction

"PickMe" is a React Native Expo project that integrates Redux, Google Autocomplete, navigation, and API implementation. This project showcases the step-by-step development of application components with a focus on building functional and interactive features.

## Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Redux](https://redux.js.org/)
- [React Native Navigation](https://reactnavigation.org/)
- [Google Autocomplete API](https://developers.google.com/maps/documentation/places/web-service/autocomplete)

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pickme.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pickme
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your Google API keys and any other necessary configurations in the `.env` or config file.
5. Run the project using Expo:
   ```bash
   expo start
   ```

## Features

- **Cross-platform Development**: Compatible with iOS and Android using React Native and Expo.
- **State Management**: Efficient state handling with Redux.
- **Enhanced User Experience**: Integration with Google Autocomplete for address selection.
- **Navigation Features**: Utilize the Directions API for route calculations and navigation.
- **Real-time Data**: Dynamic travel time and price calculations based on selected routes.
- **Bug Fixing**: Includes a dedicated section for resolving common issues and improving performance.

## Usage

After launching the app, you can explore the following features:

- Select routes and view navigation directions on the map.
- Utilize Google Autocomplete to search for addresses.
- Real-time travel time and price calculations based on your chosen route.
- Add favorite routes using the `NavFavourites` component.

## Build Showcase

[Provide screenshots or a link to a demo video showcasing the final app build]

## Build Explanation

This section provides a detailed breakdown of the app’s structure, including component hierarchy, state management, and how various APIs are implemented.

## Setting up Expo

A guide for installing Expo CLI and configuring the environment to run the project locally.

## Initializing the Build

Step-by-step instructions for starting a new React Native project and setting up initial configurations.

## Setting up Redux

Detailed steps to integrate and configure Redux for managing app state efficiently.

## Building Components

- **HomeScreen Component**: The main screen of the app.
- **NavOptions Component**: Displays navigation options.
- **MapScreen and Map Components**: Handles map view and interactions.
- **RideOptionsCard and NavigateCard Components**: Two-part components for ride and navigation options.

## Implementing Navigation

Instructions for setting up React Native navigation to transition between different screens.

## Google Autocomplete

Integrating Google’s Autocomplete feature to allow users to search and select addresses easily.

## Directions API

Explanation on using the Directions API to calculate routes and travel times.

## NavFavourites Component

Adding a feature to allow users to save favorite navigation options for quick access.

## Keyboard Avoiding View

Guidance on handling keyboard input using the `KeyboardAvoidingView` component.

## Travel Time & Price Calculation

Implementation details for calculating travel time and fare estimates based on user inputs and routes.

## Menu Button

Adding a menu button to access additional features within the app.

## Bug Fixing

Troubleshooting common issues, focusing on performance improvements and debugging strategies.

## Final Build Demo

A showcase of the final build of the app, demonstrating key features.

## Outro

A brief summary of the project, along with final thoughts on the overall development process.

## License

[MIT](LICENSE)
