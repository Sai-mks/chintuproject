import React from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import {HYDERABAD_RESTAURANTS} from '../constants/data';
import {Restaurant} from '../types';

const RestaurantsScreen: React.FC = () => {
  const handleRestaurantPress = (restaurant: Restaurant) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${restaurant.latitude},${restaurant.longitude}`;

    Linking.openURL(url).catch(err => {
      console.error('Error opening Google Maps:', err);
      Alert.alert('Error', 'Unable to open Google Maps');
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Restaurants</Text>
            <Text style={styles.sectionSubtitle}>
              Enjoy the best Hyderabadi food experiences
            </Text>
          </View>

          <View style={styles.grid}>
            {HYDERABAD_RESTAURANTS.map(restaurant => (
              <View key={restaurant.id} style={styles.gridItem}>
                <RestaurantCard
                  restaurant={restaurant}
                  onPress={() => handleRestaurantPress(restaurant)}
                />
              </View>
            ))}
          </View>
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
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  sectionSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#7F8C8D',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  gridItem: {
    width: '48%',
    marginBottom: 12,
  },
});

export default RestaurantsScreen;


