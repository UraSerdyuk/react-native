import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardSeparator from '../CardSeparator';
import Separator from '../Separator';

const onPress = () => console.log('pressed');

const CardFooter = (props) => (
  <View style={styles.cardFooter}>
    <View style={styles.cardButtonBlock}>
      {props.el.buttonOptions ? (
        <TouchableOpacity style={styles.buttonКП} onPress={onPress}>
          <Text style={styles.btnCardText}>КП</Text>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <TouchableOpacity style={styles.buttonСНР} onPress={onPress}>
        <Text style={styles.btnCardText}>СНР</Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.cardDate}> Дата начала: {props.el.date}</Text>
    </View>
    <View>
      {props.el.status ? (
        <Text style={styles.cardStatus}> Ожидание...</Text>
      ) : (
        <Text style={styles.cardStatus}> Подбор исп…</Text>
      )}
    </View>
  </View>
);
const styles = StyleSheet.create({
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  cardButtonBlock: {
    width: '17%',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonКП: {
    width: 30,
    height: 18,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(244, 174, 192,0.8)',
  },
  buttonСНР: {
    width: 30,
    height: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(164, 207, 255,0.8)',
  },
  btnCardText: {
    color: 'white',
    fontSize: 10,
    lineHeight: 17,
  },
  cardDate: {
    color: '#BDBDBD',
  },
  cardStatus: {
    color: '#BDBDBD',
  },
});
export default CardFooter;
