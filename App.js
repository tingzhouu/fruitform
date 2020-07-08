import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FruitForm from './FruitForm';

const App = () => {
  function submitFruit(fruit) {
    console.log(fruit);
  }
  return <FruitForm submitFruit={submitFruit} />;
};

export default App;

const styles = StyleSheet.create({});
