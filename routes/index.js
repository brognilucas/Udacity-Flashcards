import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from '../components/Decks'
import DeckCard from '../components/DeckCard'
import AddQuestion from '../components/AddQuestion'
import CardDetail from '../components/CardDetail'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import NewDeck from '../components/NewDeck';
import Quiz from '../components/Quiz';
import HistoryQuiz from '../components/HistoryQuiz';
const Tabs = TabNavigator({
  HomePage: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Home Page',
      tabBarIcon: () => <FontAwesome name='home' size={30} />
    }
  },
  History: {
    screen: HistoryQuiz,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: () => <FontAwesome name='history' size={30} />
    
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
  },
  CardDetail: { 
    screen: CardDetail,
    navigationOptions: { 
      headerTintColor: '#FFF', 
      headerStyle: { 
        backgroundColor: '#93A8AC'
      }
    }
  },
  AddQuestion: { 
    screen: AddQuestion,
    navigationOptions: { 
      headerTintColor: '#FFF', 
      headerStyle: { 
        backgroundColor: '#93A8AC'
      }
    }
  },
  Quiz: { 
    screen: Quiz,
    navigationOptions: { 
      headerTintColor: '#FFF', 
      headerStyle: { 
        backgroundColor: '#93A8AC'
      }
    }
  }
})

export default Stack;
