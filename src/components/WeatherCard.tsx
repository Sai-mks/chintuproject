import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Weather} from '../types';

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({weather}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <Icon name="map-marker" size={16} color="#2C3E50" />
        <Text style={styles.locationText}>{weather.location}</Text>
      </View>
      
      <Text style={styles.conditionText}>{weather.condition}</Text>
      
      <View style={styles.temperatureRow}>
        <Icon name="weather-partly-cloudy" size={32} color="#FFA500" />
        <Text style={styles.temperatureText}>{weather.temperature}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    minHeight: 120,
    justifyContent: 'space-between',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    marginLeft: 6,
  },
  conditionText: {
    fontSize: 12,
    color: '#7F8C8D',
    marginBottom: 8,
  },
  temperatureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  temperatureText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginLeft: 8,
  },
});

export default WeatherCard;

