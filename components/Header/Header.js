import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => (
  <View style={styles.header}>
    <View style={styles.navigate}>
      <View style={styles.left}>
        <Icon name="angle-left" size={35} color="#4A4A4A" />
      </View>
      <View style={styles.center}>
        <Icon name="graduation-cap" size={45} color="#CC2D38" />
      </View>
      <View style={styles.right}>
        <Icon name="align-right" size={35} color="#4A4A4A" />
      </View>
    </View>
    <View style={styles.headerTitle}>
      <Text style={styles.headerTitleText}>Заявки</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 160,
    backgroundColor: '#F9F9F9',
    paddingRight: 15,
    paddingLeft: 15,
  },
  navigate: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    height: 60,
    width: '33.3%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    height: 60,
    width: '33.3%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    height: 60,
    width: '33.3%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 40,
    height: '100%',
  },
  headerTitleText: {
    fontSize: 30,
    height: 40,
    lineHeight: 30,
    color: '#4A4A4A',
  },
});

export default Header;
