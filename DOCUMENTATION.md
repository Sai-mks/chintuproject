# Hyderabad Tourism App - Complete Documentation

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Author:** Development Team

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Architecture & Design](#3-architecture--design)
4. [Installation & Setup](#4-installation--setup)
5. [Project Structure](#5-project-structure)
6. [Technology Stack](#6-technology-stack)
7. [Components Documentation](#7-components-documentation)
8. [Screens Documentation](#8-screens-documentation)
9. [Navigation System](#9-navigation-system)
10. [Data Management](#10-data-management)
11. [Styling Guide](#11-styling-guide)
12. [Image Assets Management](#12-image-assets-management)
13. [Google Maps Integration](#13-google-maps-integration)
14. [TypeScript Configuration](#14-typescript-configuration)
15. [Building & Deployment](#15-building--deployment)
16. [Testing](#16-testing)
17. [Performance Optimization](#17-performance-optimization)
18. [Troubleshooting](#18-troubleshooting)
19. [Code Examples](#19-code-examples)
20. [Best Practices](#20-best-practices)
21. [Future Enhancements](#21-future-enhancements)
22. [Appendix](#22-appendix)

---

## 1. Introduction

### 1.1 Purpose

The Hyderabad Tourism App is a comprehensive mobile application built using React Native CLI that showcases tourism destinations, hotels, restaurants, and experiences in Hyderabad, India. The app provides users with detailed information about famous places, accommodation options, dining experiences, and activities, along with integrated Google Maps functionality for easy navigation.

### 1.2 Target Audience

- **Tourists**: Visitors planning to explore Hyderabad
- **Local Residents**: People looking to discover new places in their city
- **Travel Enthusiasts**: Users interested in cultural and historical sites
- **Food Lovers**: People seeking authentic Hyderabadi cuisine

### 1.3 Key Features

- **Famous Places**: Browse iconic landmarks with detailed descriptions
- **Hotels**: Explore luxury and budget accommodation options
- **Restaurants**: Discover authentic Hyderabadi cuisine and popular dining spots
- **Experiences**: Find curated activities and tours
- **Google Maps Integration**: Get directions to any location with one tap
- **Offline Image Support**: Fast-loading local image assets
- **Responsive Design**: Optimized for various screen sizes

---

## 2. Project Overview

### 2.1 Application Scope

The application consists of four main sections:

1. **Home Screen**: Welcome banner, category cards (Hotels, Restaurants, Experience), and famous places grid
2. **Hotels Section**: List of hotels in Hyderabad with location details
3. **Restaurants Section**: List of restaurants with cuisine types and ratings
4. **Experiences Section**: Curated activities and tours

### 2.2 User Flow

```
Home Screen
    ├── Tap "Hotels" → Hotels Screen → Tap Hotel → Google Maps
    ├── Tap "Restaurants" → Restaurants Screen → Tap Restaurant → Google Maps
    ├── Tap "Experience" → Experience Screen → Tap Experience → Google Maps
    └── Tap "Famous Place" → Place Detail Screen → Tap "Get Place" → Google Maps
```

### 2.3 Design Philosophy

- **Simplicity**: Clean, uncluttered interface
- **Performance**: Fast loading with local assets
- **Accessibility**: Text-based icons for universal compatibility
- **User Experience**: Intuitive navigation and clear call-to-actions

---

## 3. Architecture & Design

### 3.1 Application Architecture

The app follows a **component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────┐
│         App.tsx (Root)              │
│  ┌───────────────────────────────┐ │
│  │    AppNavigator (Navigation)   │ │
│  │  ┌─────────────────────────┐  │ │
│  │  │   HomeScreen            │  │ │
│  │  │   HotelsScreen          │  │ │
│  │  │   RestaurantsScreen     │  │ │
│  │  │   ExperienceScreen      │  │ │
│  │  │   PlaceDetailScreen     │  │ │
│  │  └─────────────────────────┘  │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
         │
         ├── Components (Reusable UI)
         ├── Constants (Data)
         ├── Types (TypeScript)
         └── Assets (Images)
```

### 3.2 Design Patterns

1. **Component Composition**: Small, reusable components
2. **Container/Presenter Pattern**: Screens as containers, components as presenters
3. **Data-Driven UI**: Centralized data in constants
4. **Type Safety**: Full TypeScript implementation

### 3.3 State Management

Currently using **React Navigation** for navigation state. No global state management library is used as the app's state requirements are minimal and can be handled with React's built-in state management.

### 3.4 Data Flow

```
Constants (data.ts)
    ↓
Screens (use data)
    ↓
Components (receive props)
    ↓
User Interaction
    ↓
Navigation/External Actions (Google Maps)
```

---

## 4. Installation & Setup

### 4.1 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 20 or higher
- **npm** or **yarn**: Package manager
- **React Native CLI**: `npm install -g react-native-cli`
- **Android Studio**: For Android development
- **Xcode**: For iOS development (macOS only)
- **Java Development Kit (JDK)**: Version 17 or higher
- **Android SDK**: Configured in Android Studio

### 4.2 Environment Setup

#### 4.2.1 Android Setup

1. Install Android Studio
2. Install Android SDK (API Level 33 or higher)
3. Configure ANDROID_HOME environment variable:
   ```bash
   # Windows
   set ANDROID_HOME=C:\Users\YourUsername\AppData\Local\Android\Sdk
   
   # macOS/Linux
   export ANDROID_HOME=$HOME/Library/Android/sdk
   ```
4. Add platform tools to PATH:
   ```bash
   # Windows
   set PATH=%PATH%;%ANDROID_HOME%\platform-tools
   
   # macOS/Linux
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

#### 4.2.2 iOS Setup (macOS only)

1. Install Xcode from App Store
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
3. Install CocoaPods:
   ```bash
   sudo gem install cocoapods
   ```

### 4.3 Project Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sai-mks/chintuproject.git
   cd chintuproject
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (macOS only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Start Metro bundler**:
   ```bash
   npm start
   ```

5. **Run on Android**:
   ```bash
   npm run android
   ```

6. **Run on iOS** (macOS only):
   ```bash
   npm run ios
   ```

### 4.4 Configuration Files

#### 4.4.1 react-native.config.js

This file configures asset linking for vector icons:

```javascript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./node_modules/react-native-vector-icons/Fonts/'],
};
```

#### 4.4.2 babel.config.js

Babel configuration for React Native:

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
```

#### 4.4.3 metro.config.js

Metro bundler configuration for asset resolution.

#### 4.4.4 tsconfig.json

TypeScript configuration with strict type checking enabled.

---

## 5. Project Structure

### 5.1 Directory Structure

```
Tapp/
├── android/                 # Android native code
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── assets/
│   │   │       │   └── fonts/    # Icon fonts
│   │   │       ├── java/         # Kotlin/Java code
│   │   │       └── res/          # Android resources
│   │   └── build.gradle
│   └── build.gradle
├── ios/                     # iOS native code
│   ├── Tapp/
│   └── Tapp.xcodeproj
├── src/
│   ├── assets/
│   │   └── images/          # Local image assets
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── WelcomeBanner.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── PlaceCard.tsx
│   │   ├── RestaurantCard.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── BottomNav.tsx
│   │   └── index.ts
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── HotelsScreen.tsx
│   │   ├── RestaurantsScreen.tsx
│   │   ├── ExperienceScreen.tsx
│   │   ├── PlaceDetailScreen.tsx
│   │   └── ExploreScreen.tsx
│   ├── navigation/          # Navigation setup
│   │   └── AppNavigator.tsx
│   ├── constants/           # Data and constants
│   │   └── data.ts
│   └── types/               # TypeScript definitions
│       └── index.ts
├── App.tsx                  # Root component
├── index.js                 # Entry point
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
└── react-native.config.js
```

### 5.2 File Organization Principles

- **Separation of Concerns**: Each directory has a specific purpose
- **Reusability**: Components are designed to be reusable
- **Scalability**: Structure supports easy addition of new features
- **Maintainability**: Clear naming conventions and organization

---

## 6. Technology Stack

### 6.1 Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native | 0.82.1 | Mobile framework |
| React | 19.1.1 | UI library |
| TypeScript | 5.8.3 | Type safety |
| Node.js | >=20 | Runtime environment |

### 6.2 Key Dependencies

#### 6.2.1 Navigation

- **@react-navigation/native**: ^7.1.22
  - Core navigation library
- **@react-navigation/native-stack**: ^7.8.1
  - Stack navigator implementation
- **react-native-screens**: ^4.18.0
  - Native screen components
- **react-native-gesture-handler**: ^2.29.1
  - Gesture recognition

#### 6.2.2 UI Components

- **react-native-linear-gradient**: ^2.8.3
  - Gradient backgrounds
- **react-native-safe-area-context**: ^5.5.2
  - Safe area handling
- **@react-native-community/blur**: ^4.4.1
  - Blur effects (optional)

#### 6.2.3 Development Tools

- **@react-native/babel-preset**: 0.82.1
- **@react-native/metro-config**: 0.82.1
- **@react-native/typescript-config**: 0.82.1
- **eslint**: ^8.19.0
- **prettier**: 2.8.8

### 6.3 Platform-Specific Code

- **Android**: Kotlin/Java in `android/app/src/main/java/`
- **iOS**: Swift/Objective-C in `ios/Tapp/`

---

## 7. Components Documentation

### 7.1 Header Component

**Location**: `src/components/Header.tsx`

**Purpose**: Displays the app header with centered title.

**Props**:
```typescript
interface HeaderProps {
  onMenuPress?: () => void;
  onSettingsPress?: () => void;
}
```

**Features**:
- Centered "Hyderabad Tourism" text
- Attractive typography with letter spacing
- No background color (transparent)
- Green color scheme (#0B5345, #117A65)

**Usage**:
```typescript
<Header 
  onMenuPress={() => console.log('Menu pressed')}
  onSettingsPress={() => console.log('Settings pressed')}
/>
```

**Styling**:
- Main title: 22px, bold, dark green
- Subtitle: 13px, uppercase, lighter green with letter spacing

---

### 7.2 WelcomeBanner Component

**Location**: `src/components/WelcomeBanner.tsx`

**Purpose**: Displays welcome banner with local image.

**Features**:
- Full-width banner
- Local image support (`welcome.jpg`)
- Gradient overlay for text readability
- "Welcome to Hyderabad Tourism..!" text

**Image Source**:
```typescript
source={require('../assets/images/welcome.jpg')}
```

**Styling**:
- Height: 150px
- Border radius: 16px
- Gradient: rgba(0,0,0,0.3) to rgba(0,0,0,0.5)
- Text: White, 20px, bold with shadow

---

### 7.3 CategoryCard Component

**Location**: `src/components/CategoryCard.tsx`

**Purpose**: Displays category cards (Hotels, Restaurants, Experience).

**Props**:
```typescript
interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
}
```

**Features**:
- Clickable card with image background
- Gradient overlay
- Category title display
- Touch feedback (activeOpacity)

**Usage**:
```typescript
<CategoryCard
  category={category}
  onPress={() => navigation.navigate('Hotels')}
/>
```

**Styling**:
- Width: 160px
- Height: 200px
- Border radius: 16px
- Gradient: rgba(0,0,0,0.2) to rgba(0,0,0,0.6)

---

### 7.4 PlaceCard Component

**Location**: `src/components/PlaceCard.tsx`

**Purpose**: Displays place cards in grid/list views.

**Props**:
```typescript
interface PlaceCardProps {
  place: Place;
  onPress: () => void;
}
```

**Features**:
- Supports both local and remote images
- Full-width responsive design
- Gradient overlay for text
- Touch feedback

**Image Handling**:
```typescript
const imageSource =
  typeof place.image === 'number'
    ? place.image  // Local require()
    : {uri: place.image};  // Remote URL
```

**Styling**:
- Width: 100% (for grid layout)
- Height: 150px
- Border radius: 12px

---

### 7.5 RestaurantCard Component

**Location**: `src/components/RestaurantCard.tsx`

**Purpose**: Displays restaurant information cards.

**Props**:
```typescript
interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress: () => void;
}
```

**Features**:
- Restaurant name and cuisine type
- Star rating display (★ symbol)
- Description text
- Image background with gradient

**Data Displayed**:
- Name (bold, white)
- Cuisine type (smaller, gray)
- Rating with star symbol (★)
- Description (2 lines max)

**Styling**:
- Width: 100% (for grid layout)
- Height: 180px
- Border radius: 16px
- Star color: #FFD700 (gold)

---

### 7.6 WeatherCard Component

**Location**: `src/components/WeatherCard.tsx`

**Purpose**: Displays weather information (currently not used in HomeScreen).

**Props**:
```typescript
interface WeatherCardProps {
  weather: Weather;
}
```

**Features**:
- Location display
- Weather condition
- Temperature display
- Weather icon (text-based)

---

### 7.7 BottomNav Component

**Location**: `src/components/BottomNav.tsx`

**Purpose**: Bottom navigation bar (currently not used).

**Features**:
- Four navigation tabs
- Active state indication
- Text-based icons

---

## 8. Screens Documentation

### 8.1 HomeScreen

**Location**: `src/screens/HomeScreen.tsx`

**Purpose**: Main entry point of the application.

**Layout Structure**:
```
┌─────────────────────────┐
│      Header             │
├─────────────────────────┤
│   Welcome Banner        │
├─────────────────────────┤
│  Categories (Horizontal)│
│  [Hotels] [Restaurants] │
│  [Experience]           │
├─────────────────────────┤
│  Famous Places (Grid)   │
│  [Place1] [Place2]      │
│  [Place3] [Place4]      │
│  ...                    │
└─────────────────────────┘
```

**Features**:
- Welcome banner at top
- Three category cards (horizontal scroll)
- Famous places in 2x2 grid layout
- Navigation to detail screens

**Navigation**:
- Tap category → Navigate to respective screen
- Tap place → Navigate to PlaceDetailScreen

**State Management**:
```typescript
const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
```

**Key Functions**:
- `handlePlacePress(place)`: Navigate to place detail
- `handleCategoryPress(categoryId)`: Navigate to category screen

---

### 8.2 HotelsScreen

**Location**: `src/screens/HotelsScreen.tsx`

**Purpose**: Display list of hotels in Hyderabad.

**Layout**:
- Header
- Section title and subtitle
- Grid layout (2 columns)
- Hotel cards

**Data Source**: `HYDERABAD_HOTELS` from `constants/data.ts`

**Features**:
- 2x2 grid layout
- Scrollable list
- Tap hotel → Open Google Maps

**Google Maps Integration**:
```typescript
const handleHotelPress = (hotel: Place) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${hotel.latitude},${hotel.longitude}`;
  Linking.openURL(url).catch(err => {
    Alert.alert('Error', 'Unable to open Google Maps');
  });
};
```

---

### 8.3 RestaurantsScreen

**Location**: `src/screens/RestaurantsScreen.tsx`

**Purpose**: Display list of restaurants.

**Layout**:
- Header
- Section title and subtitle
- Grid layout (2 columns)
- Restaurant cards with ratings

**Data Source**: `HYDERABAD_RESTAURANTS` from `constants/data.ts`

**Features**:
- Restaurant name, cuisine, rating
- 2x2 grid layout
- Tap restaurant → Open Google Maps

---

### 8.4 ExperienceScreen

**Location**: `src/screens/ExperienceScreen.tsx`

**Purpose**: Display list of experiences/activities.

**Layout**:
- Header
- Section title and subtitle
- Grid layout (2 columns)
- Experience cards

**Data Source**: `HYDERABAD_EXPERIENCES` from `constants/data.ts`

**Features**:
- Experience descriptions
- Local image assets
- Tap experience → Open Google Maps

---

### 8.5 PlaceDetailScreen

**Location**: `src/screens/PlaceDetailScreen.tsx`

**Purpose**: Display detailed information about a place.

**Layout Structure**:
```
┌─────────────────────────┐
│  ← Back  [Title]        │
├─────────────────────────┤
│                         │
│      Place Image        │
│      (300px height)     │
│                         │
├─────────────────────────┤
│  Place Name             │
│  Short Description      │
│  ─────────────────      │
│  Detailed Description   │
│  (long text)            │
│                         │
└─────────────────────────┘
│  [📍 Get Place] Button  │
└─────────────────────────┘
```

**Features**:
- Large place image
- Title and descriptions
- Back button navigation
- "Get Place" button (opens Google Maps)

**Navigation Params**:
```typescript
type RootStackParamList = {
  PlaceDetail: {place: Place};
};
```

**Google Maps Button**:
- Positioned at bottom (16px from bottom)
- Green background (#16A085)
- Opens Google Maps with place coordinates

---

### 8.6 ExploreScreen

**Location**: `src/screens/ExploreScreen.tsx`

**Purpose**: Combined view of places and restaurants (legacy screen).

**Note**: This screen may not be actively used in current navigation flow.

---

## 9. Navigation System

### 9.1 Navigation Setup

**Location**: `src/navigation/AppNavigator.tsx`

**Implementation**: React Navigation v7 with Native Stack Navigator

### 9.2 Navigation Structure

```typescript
Stack Navigator
├── Home (HomeScreen)
├── Hotels (HotelsScreen)
├── Restaurants (RestaurantsScreen)
├── Experience (ExperienceScreen)
├── PlaceDetail (PlaceDetailScreen)
└── Explore (ExploreScreen)
```

### 9.3 Navigation Types

**Type Definitions**:
```typescript
export type RootStackParamList = {
  Home: undefined;
  Hotels: undefined;
  Restaurants: undefined;
  Experience: undefined;
  PlaceDetail: {place: Place};
  Explore: undefined;
};
```

### 9.4 Navigation Usage

**Navigate to Screen**:
```typescript
navigation.navigate('Hotels');
navigation.navigate('PlaceDetail', {place: selectedPlace});
```

**Go Back**:
```typescript
navigation.goBack();
```

### 9.5 Navigation Configuration

- **Header**: Hidden (custom headers used)
- **Animation**: Default stack animations
- **Gesture**: Enabled (swipe back on iOS)

---

## 10. Data Management

### 10.1 Data Structure

**Location**: `src/constants/data.ts`

All application data is stored in this centralized file.

### 10.2 Data Types

#### 10.2.1 Places

```typescript
export const HYDERABAD_PLACES = [
  {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    image: string | number;  // URL or require()
    latitude: number;
    longitude: number;
  }
];
```

**Total Places**: 6
- Charminar
- Golconda Fort
- Ramoji Film City
- Hussain Sagar
- Salar Jung Museum
- Birla Mandir

#### 10.2.2 Hotels

```typescript
export const HYDERABAD_HOTELS = [
  {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    image: string | number;
    latitude: number;
    longitude: number;
  }
];
```

**Total Hotels**: 8
- Taj Falaknuma Palace
- ITC Kohenur
- Hyatt Place Banjara Hills
- The Park Hyderabad
- Novotel Hyderabad Convention Centre
- Trident Hyderabad
- Radisson Blu Plaza Banjara Hills
- Marigold by GreenPark

#### 10.2.3 Restaurants

```typescript
export const HYDERABAD_RESTAURANTS = [
  {
    id: string;
    name: string;
    description: string;
    cuisine: string;
    rating: number;
    image: string | number;
    latitude: number;
    longitude: number;
  }
];
```

**Total Restaurants**: 8
- Paradise Biryani
- Bawarchi Restaurant
- Chutneys
- Shah Ghouse Cafe
- Ohri's
- Cafe Bahar
- Hotel Shadab
- Pista House

#### 10.2.4 Experiences

```typescript
export const HYDERABAD_EXPERIENCES = [
  {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    image: string | number;
    latitude: number;
    longitude: number;
  }
];
```

**Total Experiences**: 8
- Old City Heritage Walk
- Hussain Sagar Boating
- Ramoji Film City Tour
- Hyderabadi Food Trail
- Night View from Necklace Road
- Shopping at Laad Bazaar
- Shilparamam Crafts Village
- Trek at Ananthagiri Hills

#### 10.2.5 Categories

```typescript
export const CATEGORIES = [
  {
    id: string;
    title: string;
    description: string;
    image: string;
  }
];
```

**Categories**: 3
- Hotels (id: '1')
- Restaurants (id: '2')
- Experience (id: '3')

### 10.3 Image Asset Management

**Local Images**: Stored in `src/assets/images/`

**Supported Formats**:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

**Usage**:
```typescript
// Local image
image: require('../assets/images/char.jpg')

// Remote image
image: 'https://images.unsplash.com/photo-...'
```

**Image Loading Strategy**:
- Local images: Fast, bundled with app
- Remote images: Loaded on demand (slower)

---

## 11. Styling Guide

### 11.1 Color Palette

**Primary Colors**:
- Dark Green: `#0B5345` (Headers, titles)
- Medium Green: `#117A65` (Subtitles, accents)
- Teal: `#16A085` (Buttons, links)
- Background: `#E8F5E9` (Light green background)

**Text Colors**:
- Primary: `#2C3E50` (Dark blue-gray)
- Secondary: `#7F8C8D` (Gray)
- Light: `#FFFFFF` (White on dark backgrounds)

**Accent Colors**:
- Gold: `#FFD700` (Star ratings)
- Orange: `#FFA500` (Weather icons)

### 11.2 Typography

**Font Sizes**:
- Large Title: 28px (Place detail titles)
- Title: 22px (Section titles)
- Subtitle: 18px (Card titles)
- Body: 16px (Descriptions)
- Small: 12-14px (Metadata)

**Font Weights**:
- Bold: 700-800 (Titles)
- Semi-bold: 600 (Subheadings)
- Regular: 400 (Body text)

**Letter Spacing**:
- Headers: 1-2px
- Uppercase text: 2px

### 11.3 Spacing

**Padding**:
- Screen padding: 16px
- Component padding: 12-20px
- Button padding: 16px vertical

**Margins**:
- Section spacing: 24px
- Card spacing: 12px
- Grid gap: 2% (48% width per item)

**Border Radius**:
- Cards: 12-16px
- Buttons: 12px
- Images: 12-16px

### 11.4 Layout Patterns

**Grid Layout**:
```typescript
grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}
gridItem: {
  width: '48%',
  marginBottom: 12,
}
```

**Card Layout**:
- Full width in grid
- Rounded corners
- Shadow/elevation for depth
- Image background with gradient overlay

---

## 12. Image Assets Management

### 12.1 Asset Organization

**Directory**: `src/assets/images/`

**Naming Convention**:
- Lowercase with hyphens or camelCase
- Descriptive names (e.g., `char.jpg`, `welcome.jpg`)

### 12.2 Supported Image Formats

1. **JPEG/JPG**: Best for photos
2. **PNG**: Best for graphics with transparency
3. **WebP**: Modern format with good compression

### 12.3 Image Optimization

**Recommendations**:
- Resize images to appropriate dimensions (800-1200px width)
- Compress images before adding to assets
- Use WebP for better compression
- Keep file sizes under 500KB per image

### 12.4 Image Loading

**Local Images**:
```typescript
require('../assets/images/image.jpg')
```

**Remote Images**:
```typescript
{uri: 'https://example.com/image.jpg'}
```

**Hybrid Support**:
Components handle both types:
```typescript
const imageSource =
  typeof place.image === 'number'
    ? place.image
    : {uri: place.image};
```

### 12.5 Current Image Assets

- `welcome.jpg` - Welcome banner
- `char.jpg` - Charminar
- `golconda.webp` - Golconda Fort
- `Ramoji.jpg` - Ramoji Film City
- `hussain.jpg` - Hussain Sagar
- `Salar.jpg` - Salar Jung Museum
- `birla.webp` - Birla Mandir
- Hotel images (Falaknuma.jpg, itc.png, etc.)
- Restaurant images
- Experience images

---

## 13. Google Maps Integration

### 13.1 Implementation

The app uses **Google Maps URLs** to open locations in the user's default map application.

### 13.2 URL Format

```typescript
const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
```

### 13.3 Usage Pattern

**In Screens**:
```typescript
const handlePlacePress = (place: Place) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
  
  Linking.openURL(url).catch(err => {
    console.error('Error opening Google Maps:', err);
    Alert.alert('Error', 'Unable to open Google Maps');
  });
};
```

### 13.4 Error Handling

- Try to open URL
- Catch errors
- Show user-friendly alert if fails

### 13.5 Future Enhancement

Consider implementing:
- In-app map view using `react-native-maps`
- Custom markers
- Route directions
- Current location detection

---

## 14. TypeScript Configuration

### 14.1 Type Definitions

**Location**: `src/types/index.ts`

**Defined Types**:

```typescript
export interface Place {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string | number;  // Supports both URL and require()
  latitude: number;
  longitude: number;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  rating: number;
  image: string | number;
  latitude: number;
  longitude: number;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string | number;
  latitude: number;
  longitude: number;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string | number;
  latitude: number;
  longitude: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}
```

### 14.2 Type Safety Benefits

- **Compile-time error checking**
- **IntelliSense support**
- **Refactoring safety**
- **Documentation through types**

### 14.3 Navigation Types

```typescript
export type RootStackParamList = {
  Home: undefined;
  Hotels: undefined;
  Restaurants: undefined;
  Experience: undefined;
  PlaceDetail: {place: Place};
  Explore: undefined;
};
```

---

## 15. Building & Deployment

### 15.1 Debug Build

**Android**:
```bash
cd android
./gradlew assembleDebug
```

**Output**: `android/app/build/outputs/apk/debug/app-debug.apk`

**iOS** (macOS only):
```bash
cd ios
xcodebuild -workspace Tapp.xcworkspace -scheme Tapp -configuration Debug
```

### 15.2 Release Build

#### 15.2.1 Android Release APK

**Step 1**: Create keystore (one-time):
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore tapp-key.jks -alias tapp-key -keyalg RSA -keysize 2048 -validity 10000
```

**Step 2**: Configure `android/gradle.properties`:
```properties
MYAPP_UPLOAD_STORE_FILE=tapp-key.jks
MYAPP_UPLOAD_KEY_ALIAS=tapp-key
MYAPP_UPLOAD_STORE_PASSWORD=your-password
MYAPP_UPLOAD_KEY_PASSWORD=your-password
```

**Step 3**: Update `android/app/build.gradle`:
```gradle
signingConfigs {
  release {
    storeFile file(MYAPP_UPLOAD_STORE_FILE)
    storePassword MYAPP_UPLOAD_STORE_PASSWORD
    keyAlias MYAPP_UPLOAD_KEY_ALIAS
    keyPassword MYAPP_UPLOAD_KEY_PASSWORD
  }
}
buildTypes {
  release {
    signingConfig signingConfigs.release
    minifyEnabled true
    proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
  }
}
```

**Step 4**: Build:
```bash
cd android
./gradlew assembleRelease
```

**Output**: `android/app/build/outputs/apk/release/app-release.apk`

#### 15.2.2 Android App Bundle (AAB)

For Google Play Store:
```bash
cd android
./gradlew bundleRelease
```

**Output**: `android/app/build/outputs/bundle/release/app-release.aab`

#### 15.2.3 iOS Release

1. Open `ios/Tapp.xcworkspace` in Xcode
2. Select "Any iOS Device" as target
3. Product → Archive
4. Distribute App → App Store Connect

### 15.3 ProGuard Configuration

**Location**: `android/app/proguard-rules.pro`

**Recommended Rules**:
```proguard
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }
```

### 15.4 Version Management

**Update version in**:
- `package.json`: `"version": "0.0.1"`
- `android/app/build.gradle`: `versionCode` and `versionName`
- `ios/Tapp/Info.plist`: `CFBundleShortVersionString` and `CFBundleVersion`

---

## 16. Testing

### 16.1 Unit Testing

**Framework**: Jest

**Run Tests**:
```bash
npm test
```

**Test Files**: `__tests__/` directory

### 16.2 Component Testing

**Example Test**:
```typescript
import {render} from '@testing-library/react-native';
import Header from '../components/Header';

test('renders header correctly', () => {
  const {getByText} = render(<Header />);
  expect(getByText('Hyderabad')).toBeTruthy();
});
```

### 16.3 Integration Testing

Test navigation flows and user interactions.

### 16.4 Manual Testing Checklist

- [ ] App launches successfully
- [ ] Navigation between screens works
- [ ] Images load correctly
- [ ] Google Maps opens on button press
- [ ] Grid layouts display correctly
- [ ] Scrollable lists work smoothly
- [ ] Back button navigation works
- [ ] App handles errors gracefully

---

## 17. Performance Optimization

### 17.1 Image Optimization

- **Use local images**: Faster than remote URLs
- **Optimize image sizes**: Resize before adding to assets
- **Use appropriate formats**: WebP for better compression

### 17.2 Code Optimization

- **Lazy loading**: Consider lazy loading for screens
- **Memoization**: Use React.memo for expensive components
- **FlatList**: Use FlatList instead of ScrollView for long lists

### 17.3 Bundle Size

- **Remove unused dependencies**
- **Use ProGuard** for release builds
- **Code splitting**: Consider if app grows larger

### 17.4 Memory Management

- **Image caching**: React Native handles this automatically
- **Cleanup**: Remove listeners on unmount
- **Avoid memory leaks**: Proper component lifecycle management

---

## 18. Troubleshooting

### 18.1 Common Issues

#### Issue: Icons not showing

**Solution**:
1. Ensure fonts are in `android/app/src/main/assets/fonts/`
2. Rebuild the app: `cd android && ./gradlew clean && cd .. && npx react-native run-android`
3. Check `react-native.config.js` configuration

#### Issue: Images not loading

**Solution**:
1. Check file paths in `require()` statements
2. Ensure file names match exactly (case-sensitive)
3. Verify images are in `src/assets/images/`
4. Restart Metro bundler

#### Issue: Google Maps not opening

**Solution**:
1. Check internet connection
2. Verify Google Maps app is installed
3. Check URL format in code
4. Test on real device (emulator may not have Maps)

#### Issue: Build errors

**Solution**:
1. Clean build: `cd android && ./gradlew clean`
2. Clear cache: `npm start -- --reset-cache`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Check Node version: Should be >= 20

#### Issue: Navigation errors

**Solution**:
1. Verify navigation types match
2. Check screen names in navigator
3. Ensure navigation params match type definitions

### 18.2 Debugging

**Enable Debug Menu**:
- Android: Shake device or `adb shell input keyevent 82`
- iOS: Cmd+D (Simulator) or shake device

**React Native Debugger**:
- Install React Native Debugger
- Enable remote debugging
- Use Chrome DevTools

**Logging**:
```typescript
console.log('Debug message');
console.error('Error message');
```

---

## 19. Code Examples

### 19.1 Creating a New Screen

```typescript
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

const NewScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <View style={styles.content}>
        <Text>New Screen Content</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  content: {
    padding: 16,
  },
});

export default NewScreen;
```

### 19.2 Adding Navigation

**In AppNavigator.tsx**:
```typescript
<Stack.Screen name="NewScreen" component={NewScreen} />
```

**Navigate to it**:
```typescript
navigation.navigate('NewScreen');
```

### 19.3 Creating a New Component

```typescript
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface NewComponentProps {
  title: string;
  onPress?: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewComponent;
```

### 19.4 Adding New Data

**In data.ts**:
```typescript
export const NEW_DATA = [
  {
    id: '1',
    name: 'New Item',
    description: 'Description',
    image: require('../assets/images/new-image.jpg'),
    latitude: 17.3616,
    longitude: 78.4747,
  },
];
```

### 19.5 Handling Image Sources

```typescript
// Component that handles both local and remote images
const ImageComponent = ({source}) => {
  const imageSource = typeof source === 'number' 
    ? source 
    : {uri: source};
    
  return <Image source={imageSource} />;
};
```

---

## 20. Best Practices

### 20.1 Code Organization

- **Keep components small and focused**
- **Use TypeScript for type safety**
- **Follow consistent naming conventions**
- **Organize imports logically**

### 20.2 Component Design

- **Make components reusable**
- **Use props for customization**
- **Keep styling in StyleSheet**
- **Handle edge cases**

### 20.3 Performance

- **Optimize images before adding**
- **Use local assets when possible**
- **Avoid unnecessary re-renders**
- **Profile with React DevTools**

### 20.4 Accessibility

- **Add accessibility labels**
- **Ensure sufficient color contrast**
- **Support screen readers**
- **Test with accessibility tools**

### 20.5 Security

- **Don't commit sensitive data**
- **Use environment variables for API keys**
- **Validate user inputs**
- **Keep dependencies updated**

### 20.6 Git Workflow

- **Use meaningful commit messages**
- **Create feature branches**
- **Review code before merging**
- **Keep .gitignore updated**

---

## 21. Future Enhancements

### 21.1 Planned Features

1. **User Authentication**
   - Login/Register
   - User profiles
   - Favorite places

2. **Search Functionality**
   - Search places, hotels, restaurants
   - Filter by category
   - Sort options

3. **Reviews & Ratings**
   - User reviews
   - Rating system
   - Photo uploads

4. **Offline Support**
   - Download content for offline viewing
   - Sync when online

5. **Push Notifications**
   - New place alerts
   - Special offers
   - Event notifications

6. **Social Features**
   - Share places
   - Social media integration
   - User-generated content

7. **Advanced Maps**
   - In-app map view
   - Route planning
   - Nearby places

8. **Multilingual Support**
   - Multiple languages
   - Language switcher

9. **Dark Mode**
   - Theme switching
   - System preference detection

10. **Analytics**
    - User behavior tracking
    - Popular places analytics
    - Performance metrics

### 21.2 Technical Improvements

- **State Management**: Consider Redux or Zustand
- **API Integration**: Backend API for dynamic data
- **Caching**: Implement data caching
- **Testing**: Increase test coverage
- **CI/CD**: Automated builds and deployments

---

## 22. Appendix

### 22.1 Useful Commands

```bash
# Start Metro
npm start

# Run Android
npm run android

# Run iOS
npm run ios

# Lint code
npm run lint

# Run tests
npm test

# Clean Android build
cd android && ./gradlew clean

# Clear Metro cache
npm start -- --reset-cache
```

### 22.2 File Size Guidelines

- **APK Size**: Aim for < 50MB
- **Image Assets**: < 500KB each
- **Total Assets**: < 20MB

### 22.3 Supported Android Versions

- **Minimum**: Android 5.0 (API 21)
- **Target**: Android 14 (API 34)
- **Recommended**: Android 8.0+ (API 26+)

### 22.4 Supported iOS Versions

- **Minimum**: iOS 13.0
- **Target**: iOS 17.0
- **Recommended**: iOS 15.0+

### 22.5 Contact & Support

- **Repository**: https://github.com/Sai-mks/chintuproject
- **Issues**: Use GitHub Issues for bug reports
- **Documentation**: This file

### 22.6 License

This project is private and proprietary. All rights reserved.

---

## Conclusion

This documentation provides a comprehensive guide to the Hyderabad Tourism App. For additional questions or clarifications, please refer to the code comments or create an issue in the repository.

**Last Updated**: November 2025  
**Document Version**: 1.0.0

---

*End of Documentation*

