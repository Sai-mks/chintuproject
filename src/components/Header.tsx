import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface HeaderProps {
  onMenuPress?: () => void;
  onSettingsPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({onMenuPress, onSettingsPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Hyderabad</Text>
        <Text style={styles.logoSubText}>Tourism</Text>
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconButton: {
    padding: 8,
  },
  iconText: {
    fontSize: 20,
    color: '#2C3E50',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#0B5345',
  },
  logoSubText: {
    fontSize: 13,
    color: '#117A65',
    marginTop: 2,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

export default Header;

