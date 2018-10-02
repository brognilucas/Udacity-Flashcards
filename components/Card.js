import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import CardFlip from 'react-native-card-flip';


class Card extends Component {

  render() {
    const { question, correct, incorrect } = this.props
    return (
      <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
        <View style={styles.card} >
          <FontAwesome name='question' size={50} color={'#FFF'} />
          <Text style={styles.question}>
            {question.question}
          </Text>
          <TouchableOpacity onPress={() => this.card.flip()}>
            <Text style={styles.showAnswer}> Show Answer </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.answer}>
            {question.answer}
          </Text>
          <TouchableOpacity onPress={() => this.card.flip()}>
            <Text> Show question </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCorrect}>
            <Text style={styles.btnText} onPress={() => {
              this.card.flip();
              correct()
            }} > Correct </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIncorrect} onPress={() => {
            this.card.flip();
            incorrect()
          }}>
            <Text style={styles.btnText}> Incorrect </Text>
          </TouchableOpacity>
        </View>

      </CardFlip>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#769FB6'
  },
  question: {
    fontSize: 30,
    color: '#fff'
  },
  answer: {
    fontSize: 25,
    color: '#EFF6EE'
  },
  showAnswer: {
    fontSize: 15,
    color: '#F02D3A'
  },
  cardContainer: {
    height: 300,
    flex: 1,
  },
  btnCorrect: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 40,
    width: 160,
    marginTop: 25,
    backgroundColor: '#8ED081',
    borderRadius: 8
  },
  btnIncorrect: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 40,
    width: 160,
    marginTop: 5,
    backgroundColor: '#DD0426',
    borderRadius: 8
  },
  btnText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15
  }
});

export default Card
