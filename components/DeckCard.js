import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class DeckCard extends Component {

  goToPage = () => {
    alert('hahahah')    
  }

  render() {
    return (
      <TouchableOpacity style={styles.card} onPress={this.goToPage}>
        <Text style={styles.title}>
          { this.props.text }
        </Text>
        <Text style={styles.subtitle}> 
          { this.props.text}
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
    textAlign:'center',
    color: '#FFFEEE',
    marginTop: 10
  }
})

export default DeckCard;
