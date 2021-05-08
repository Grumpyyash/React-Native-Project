import React, {useState} from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import uuid from 'react-native-uuid';
import {View, Text, StyleSheet, FlatList, Alert} from "react-native";

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: "Milk"},
    {id: uuid.v4(), text: "Eggs"},
    {id: uuid.v4(), text: "Bread"},
    {id: uuid.v4(), text: "Juice"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (item) => {
    if(!item) {
      Alert.alert("Error", "Please enter an item");
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text: item}, ...prevItems];
      });
    }  
  }
  
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) =>
        <ListItem item={item} deleteItem={deleteItem} />
      } />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
