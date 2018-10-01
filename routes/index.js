import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from '../components/Decks'
import DeckCard from '../components/DeckCard'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import NewDeck from '../components/NewDeck';
const Tabs = TabNavigator({
  HomePage: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Home Page',
      tabBarIcon: () => <FontAwesome name='home' size={30} />
    }
  },
  Quiz: {
    screen: DeckCard,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: () => <FontAwesome name='question' size={30} />
    }
  }
});

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  CreateDeck: { 
    screen: NewDeck , 
    navigationOptions: { 
      headerTintColor: '#FFF', 
      title: 'Create a new Deck ', 
      headerStyle: { 
        backgroundColor: '#93A8AC'
      }
    }
  }
})

export default Stack;
