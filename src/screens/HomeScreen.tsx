import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import CategoryCard from '../components/CategoryCard';
import PlaceCard from '../components/PlaceCard';
import {HYDERABAD_PLACES, CATEGORIES} from '../constants/data';
import {RootStackParamList} from '../navigation/AppNavigator';
import {Place} from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handlePlacePress = (place: Place) => {
    navigation.navigate('PlaceDetail', {place});
  };

  const handleCategoryPress = (categoryId: string) => {
    if (categoryId === '1') {
      navigation.navigate('Hotels');
    } else if (categoryId === '2') {
      navigation.navigate('Restaurants');
    } else if (categoryId === '3') {
      navigation.navigate('Experience');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        {/* Welcome Section */}
        <View style={styles.topSection}>
          <WelcomeBanner />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}>
            {CATEGORIES.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={() => handleCategoryPress(category.id)}
              />
            ))}
          </ScrollView>
          
          {/* Pagination Dots */}
          <View style={styles.pagination}>
            {CATEGORIES.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeCategoryIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Famous Places Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Famous places</Text>
          </View>

          <View style={styles.placesGrid}>
            {HYDERABAD_PLACES.map(place => (
              <View key={place.id} style={styles.placeGridItem}>
                <PlaceCard
                  place={place}
                  onPress={() => handlePlacePress(place)}
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
  topSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  categoryScroll: {
    paddingRight: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#BDC3C7',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16A085',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  moreLink: {
    fontSize: 14,
    color: '#16A085',
    fontWeight: '600',
  },
  placesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  placeGridItem: {
    width: '48%',
    marginBottom: 12,
  },
});

export default HomeScreen;

