import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSeparator = () => <View style={styles.cardSeparator} />;

const styles = StyleSheet.create({
  cardSeparator: {
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'lightgrey',
    width: '90%',
    height: 2,
  },
});

export default CardSeparator;
