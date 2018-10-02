import React , { Component } from 'react'
import { View } from 'react-native'
class AddQuestion extends Component { 
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: `Add Question to ${params.deck.name}`
        };
    };

    render(){
        return(
            <View>
                
            </View>
        )
    }
}

export default AddQuestion