import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

class CardDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: `Card: ${params.deck.name}`
        };
    };

    addQuestion = () => {
        const { navigation } = this.props

        const { params } = navigation.state;
        navigation.navigate('AddQuestion' , { deck:  params.deck } )
    }

    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center' }}>

                <TouchableOpacity style={styles.btnAdd} onPress={this.addQuestion}>
                    <Text style={styles.btnAddText}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnQuiz}>
                    <Text style={styles.btnQuizText}> Start Quiz </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    btnAdd: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 200,
        backgroundColor: '#040F0F',
        marginLeft: 20,
        marginRight: 20,
        height: 50
    },
    btnQuiz: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#9FA4A9',
        marginLeft: 20,
        marginRight: 20,
        height: 50
    },
    btnQuizText: {
        color: '#000',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20,
    },
    btnAddText: {
        color: '#FFF',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20,
    }
})

export default CardDetail