import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import { removeQuestions, removeCard } from '../redux/actions/decks'

import { clearLocalNotification, setLocalNotification } from '../utils'
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
        navigation.navigate('AddQuestion', { deck: params.deck })
    }


    startQuiz = () => {

        clearLocalNotification()
        .then( setLocalNotification())
        
        const { navigation } = this.props

        const { id } = navigation.state.params.deck;
        navigation.navigate('Quiz', { id })
    }

    removeQuestions = () => {

        const { navigation, dispatch } = this.props

        const { id } = navigation.state.params.deck;


        dispatch(removeQuestions(id))
    }


    removeCard = () => {
        Alert.alert(
            'Confirm',
            'Are you sure?',
            [
                { text: 'Cancel', onPress: () => { } },
                {
                    text: 'OK', onPress: () => {

                        const { navigation, dispatch } = this.props

                        const { id } = navigation.state.params.deck;

                        navigation.goBack()

                        dispatch(removeCard(id))
                    }
                },
            ],
        )
    }

    render() {
        const { deck } = this.props

        if (!deck) {
            //Created just for return without error on remove card
            return (
                <View>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, alignContent: 'center' }}>
                <View style={styles.info}>
                    <Text style={styles.infoTxt}> Currently this deck has {deck.questions ? deck.questions.length : 0} questions </Text>
                </View>
                <TouchableOpacity style={styles.btnAdd} onPress={this.addQuestion}>
                    <Text style={styles.btnAddText}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnQuiz,
                deck.questions.length === 0 ? { opacity: 0.3 } : { opacity: 1 }

                ]} onPress={this.startQuiz} disabled={deck.questions.length === 0}>
                    <Text style={styles.btnQuizText}> Start Quiz </Text>
                </TouchableOpacity>
                <View style={styles.removeBtn}>
                    <TouchableOpacity onPress={this.removeCard}>
                        <Text style={styles.removeBtnTxt}> Remove Card </Text>
                    </TouchableOpacity>
                    {deck.questions.length > 0 && (
                        <TouchableOpacity onPress={this.removeQuestions}>
                            <Text style={styles.removeBtnTxt}> Remove Questions </Text>
                        </TouchableOpacity>
                    )}

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    removeBtnTxt: {
        fontSize: 15,
        color: '#F13030'
    },
    removeBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnAdd: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 100,
        backgroundColor: '#1D2D44',
        marginLeft: 20,
        marginRight: 20,
        height: 50
    },
    info: {
        justifyContent: 'center',
        marginTop: 100,
    },
    infoTxt: {
        textAlign: 'center',
        fontSize: 25,
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

function mapStateToProps({ decks }, { navigation }) {

    const { id } = navigation.state.params.deck;

    return {
        deck: decks[id]
    }
}

export default connect(mapStateToProps)(CardDetail)