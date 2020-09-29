import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => <View style={styles.Separator} />;

const styles = StyleSheet.create({
  Separator: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 3,
  },
});

export default Separator;
