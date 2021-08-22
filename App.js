import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid, v4 } from 'uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    { id: v4(), itemName: 'Milk' },
    { id: v4(), itemName: 'Eggs' },
    { id: v4(), itemName: 'Bread' },
    { id: v4(), itemName: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id !== id);
    });
  };

  const addItem = (itemName) => {
    if (!itemName) {
      Alert.alert('Please add an item');
    } else {
      setItems((prevItem) => {
        return [{ id: v4(), itemName }, ...prevItem];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        style={{ marginBottom: 0 }}
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});

export default App;
