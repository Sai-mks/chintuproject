import React from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';
import {HYDERABAD_HOTELS} from '../constants/data';
import {Place} from '../types';

const HotelsScreen: React.FC = () => {
  const handleHotelPress = (hotel: Place) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${hotel.latitude},${hotel.longitude}`;

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
            <Text style={styles.sectionTitle}>Hotels</Text>
            <Text style={styles.sectionSubtitle}>
              Discover the best places to stay in Hyderabad
            </Text>
          </View>

          <View style={styles.grid}>
            {HYDERABAD_HOTELS.map(hotel => (
              <View key={hotel.id} style={styles.gridItem}>
                <PlaceCard
                  place={hotel}
                  onPress={() => handleHotelPress(hotel)}
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

export default HotelsScreen;


