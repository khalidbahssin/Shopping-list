import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    padding: 15,
    // height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
