import React , { Component } from 'react'
import { connect } from  'react-redux'
import { View, TouchableOpacity , Text, StyleSheet} from 'react-native'
import CardFront from './CardFront';


class Quiz extends Component { 

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Quiz`
        };
    };


    state = { 
        showAnswer: false
    }

    render(){
        const { questions} = this.props
        const { showAnswer} = this.state
        return(
            <View> 
                {!showAnswer && (
                    <CardFront />
                )}
                
            </View>
        )
    }
}



function mapStateToProps({decks} , { navigation }){
    const { id } = navigation.state.params;

    return { 
        questions: decks[id].questions
    }
}

export default connect(mapStateToProps)(Quiz)
