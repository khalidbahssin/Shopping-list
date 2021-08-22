import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');
  const handleText = (inputValue) => {
    setValue(inputValue);
  };
  return (
    <View style={styles.addItem}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={handleText}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(value)}>
        <Text style={styles.btnTex}>
          <FontAwesome name="plus" size={18} color="darkslateblue" />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addItem: {
    padding: 10,
  },
  input: {
    height: 60,
    padding: 10,
    margin: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#c2bad8',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  btnTex: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
