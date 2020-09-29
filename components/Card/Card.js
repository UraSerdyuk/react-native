import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardSeparator from '../CardSeparator';
import Separator from '../Separator';
import CardFooter from '../CardFooter';

const Card = (props) => (
  <View>
    <View key={props.el.id} style={styles.card}>
      <View style={styles.cardId}>
        <Text>{props.el.id}</Text>
      </View>
      <View>
        <Text style={styles.cardTitleText}>{props.el.title}</Text>
      </View>
      <View key={props.el.id} style={styles.cardHeaderBar}>
        <View>
          <Icon name="usd" size={20} color="#FFB11B" style={styles.usdIcon} />
        </View>
        {props.el.fresh ? (
          <View style={styles.cardFreshIconIndicator}></View>
        ) : (
          <View></View>
        )}
      </View>
      <View style={styles.cardText}>
        <Text>{props.el.text}</Text>
      </View>
      <View style={styles.cardSeparateWrapper}>
        <CardSeparator />
      </View>

      <View>
        <Text style={styles.cardDescriptionItem}>{props.el.description}</Text>
      </View>
      <CardFooter {...props} />
    </View>
    <Separator />
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2F2F2',
    paddingRight: 15,
    paddingLeft: 15,
  },
  cardId: {
    position: 'relative',
    width: 77,
    height: 22,
    top: -10,
    left: '40%',
    backgroundColor: '#FFF0EC',
  },
  cardTitleText: {
    color: '#9B9B9B',
    textAlign: 'center',
  },
  cardHeaderBar: {
    width: 50,
    position: 'absolute',
    top: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardFreshIconIndicator: {
    width: 20,
    height: 20,
    backgroundColor: '#12A9B0',
    borderRadius: 20,
  },
  cardText: {
    marginTop: 5,
    color: '#4A4A4A',
  },
  cardDescriptionItem: {
    marginTop: 5,
    marginBottom: 10,
    color: '#4A4A4A',
  },
  cardSeparateWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});
