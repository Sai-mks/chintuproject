import React from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';
import {HYDERABAD_EXPERIENCES} from '../constants/data';
import {Experience} from '../types';

const ExperienceScreen: React.FC = () => {
  const handleExperiencePress = (experience: Experience) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${experience.latitude},${experience.longitude}`;

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
            <Text style={styles.sectionTitle}>Experiences</Text>
            <Text style={styles.sectionSubtitle}>
              Activities you must try in Hyderabad
            </Text>
          </View>

          <View style={styles.grid}>
            {HYDERABAD_EXPERIENCES.map(experience => (
              <View key={experience.id} style={styles.gridItem}>
                <PlaceCard
                  place={experience}
                  onPress={() => handleExperiencePress(experience)}
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

export default ExperienceScreen;


