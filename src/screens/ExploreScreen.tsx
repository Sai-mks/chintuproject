import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';
import RestaurantCard from '../components/RestaurantCard';
import {HYDERABAD_PLACES, HYDERABAD_RESTAURANTS} from '../constants/data';
import {RootStackParamList} from '../navigation/AppNavigator';
import {Place} from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ExploreScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePlacePress = (place: Place) => {
    navigation.navigate('PlaceDetail', {place});
  };

  const handleRestaurantPress = (restaurant: any) => {
    // Open Google Maps with restaurant location
    const url = `https://www.google.com/maps/search/?api=1&query=${restaurant.latitude},${restaurant.longitude}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Unable to open Google Maps');
        }
      })
      .catch(err => {
        Alert.alert('Error', 'Unable to open Google Maps');
        console.error(err);
      });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        {/* Famous Places Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Famous Places</Text>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.placesScroll}>
            {HYDERABAD_PLACES.map(place => (
              <PlaceCard
                key={place.id}
                place={place}
                onPress={() => handlePlacePress(place)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Restaurants Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Restaurants</Text>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.restaurantsScroll}>
            {HYDERABAD_RESTAURANTS.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onPress={() => handleRestaurantPress(restaurant)}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  placesScroll: {
    paddingRight: 16,
  },
  restaurantsScroll: {
    paddingRight: 16,
  },
});

export default ExploreScreen;

