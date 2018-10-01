import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

class DeckCard extends Component {

  goToPage = () => {
    alert('hahahah')
  }

  render() {

    const { deck } = this.props


    alert(deck)

    return (
      <TouchableOpacity style={styles.card} onPress={this.goToPage}>
        <Text style={styles.title}>
          {deck.name}
        </Text>
        <Text style={styles.subtitle}>
          {deck.id}
        </Text>
      </TouchableOpacity>
    )

  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#93A8AC',
    flexDirection: 'column',
    height: 'auto'
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginTop: 30
  },
  subtitle: {
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFEEE',
    marginTop: 10
  }
})

export default DeckCard