# 🏈 Sports Prediction App

A simple and streamlined mobile application that allows sports fans to view upcoming and live games, check odds, and make basic predictions. Built using React Native.

## ✨ Features

### 1. Games Dashboard
- View a list of upcoming, live, and completed games.
- Quick filtering by game status.
- Displays team matchups and betting odds.

### 2. Game Detail Screen
- Detailed view of selected game.
- Shows team details and odds.
- Simple prediction interface (pick winner).

### 3. User Profile
- View prediction history.
- Tracks win/loss record and virtual balance.

---

## 🛠️ Tech Stack

- **React Native**
- **React Navigation**
- **JavaScript**
- **react-native-reanimated**
- **Mock data (can be replaced with real API/backend)**


---

## ⚙️ Performance Optimizations -

To ensure smooth performance with large datasets (10,000+ items), the following optimizations are implemented:

- useCallback: Prevents unnecessary re-renders of components.

- React.memo: Optimizes functional components by avoiding re-renders when props haven't changed.

- Modular and Maintainable Code: Clean separation of logic and UI for scalability.

- Used react reanimated library for smooth animation

- Used FlatList to render large data for better user experiance.


## 📲 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sports-prediction-app.git
cd sports-prediction-app

# Getting Started

## Step 1: Start Metro

```sh
# Using npm
npm install

# OR using Yarn
yarn
```

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

