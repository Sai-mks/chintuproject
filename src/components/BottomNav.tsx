import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BottomNavProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  activeTab = 'home',
  onTabPress,
}) => {
  const tabs = [
    {id: 'home', icon: 'home'},
    {id: 'search', icon: 'search'},
    {id: 'location', icon: 'place'},
    {id: 'profile', icon: 'person'},
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress?.(tab.id)}>
          <Icon
            name={tab.icon}
            size={24}
            color={activeTab === tab.id ? '#16A085' : '#95A5A6'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tab: {
    padding: 8,
  },
});

export default BottomNav;

