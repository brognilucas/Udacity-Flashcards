import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { MaterialCommunityIcons} from '@expo/vector-icons' 
class DeckCard extends Component {

  goToPage = () => {
    const { deck, navigation } = this.props
    navigation.navigate('CardDetail' , { 
      deck
    })
  }

  render() {

    const { deck } = this.props
    return (
      <TouchableOpacity style={styles.card} onPress={this.goToPage}>
        <Text style={styles.title}>
          {deck.name}
        </Text>
        <Text style={styles.subtitle}>
        <MaterialCommunityIcons name='cards' size={25} />
          {deck.questions? deck.questions.length : 0 } cards 
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
    marginTop: 5
  }
})

function mapStateToProps({ decks } , { id , navigation}){
  return {
    deck: decks[id], 
    navigation
  }
}

export default connect(mapStateToProps)(DeckCard)