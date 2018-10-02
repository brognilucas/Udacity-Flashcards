import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
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


    startQuiz = () => { 

        const { navigation } = this.props

        const { id } = navigation.state.params.deck;
        navigation.navigate('Quiz' , { id } )
    }

    render() {
        const { deck } = this.props

        return (
            <View style={{ flex: 1, alignContent: 'center' }}>
                <View>
                    <Text> Currently has { deck.questions ? deck.questions.length : 0 } questions </Text>
                </View>
                <TouchableOpacity style={styles.btnAdd} onPress={this.addQuestion}>
                    <Text style={styles.btnAddText}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnQuiz} onPress={this.startQuiz}>
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
        backgroundColor: '#1D2D44',
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

function mapStateToProps({decks} , { navigation } ){

    const { id } = navigation.state.params.deck;

    return { 
        deck: decks[id]
    }
}

export default connect(mapStateToProps)(CardDetail)