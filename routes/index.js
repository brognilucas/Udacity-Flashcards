import { TabNavigator } from 'react-navigation';
import Decks from '../components/Decks'
import DeckCard from '../components/DeckCard'
import { FontAwesome  } from '@expo/vector-icons'
import React from 'react'
const Tabs = TabNavigator({
  HomePage: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Home Page' ,
      tabBarIcon: () => <FontAwesome name='home' size={30} />
    }
  },
  Quiz:  {
    screen: DeckCard,
    navigationOptions: {
      tabBarLabel: 'Quiz' ,
      tabBarIcon: () => <FontAwesome name='question' size={30} />
    }
  }
});

export default Tabs;
