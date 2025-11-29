# Hyderabad Tourism App

A React Native CLI app showcasing tourism destinations, hotels, restaurants, and experiences in Hyderabad, India.

## Features

- **Famous Places**: Explore iconic landmarks like Charminar, Golconda Fort, Ramoji Film City, and more
- **Hotels**: Browse luxury and budget hotels in Hyderabad
- **Restaurants**: Discover authentic Hyderabadi cuisine and popular dining spots
- **Experiences**: Find activities and tours to make your visit memorable
- **Google Maps Integration**: Get directions to any location with one tap

## Tech Stack

- React Native 0.82.1
- TypeScript
- React Navigation
- React Native Vector Icons (text-based icons)
- React Native Linear Gradient

## Installation

```bash
npm install
```

## Running the App

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

## Building APK

### Debug APK
```bash
cd android
./gradlew assembleDebug
```

### Release APK
```bash
cd android
./gradlew assembleRelease
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── navigation/     # Navigation setup
├── constants/      # Data and constants
├── types/          # TypeScript type definitions
└── assets/         # Images and static assets
```

## License

This project is private and proprietary.
