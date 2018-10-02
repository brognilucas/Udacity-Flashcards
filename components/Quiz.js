import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Card from './Card';
import CardResults from './CardResults'

class Quiz extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Quiz`
        };
    };


    state = {
        actualQuestion: 1,
        seeResults: false,
        correct: 0,
        incorrect: 0
    }

    onRestartQuiz(){
        this.setState( () => ({
            actualQuestion: 1,
            seeResults: false,
            correct: 0,
            incorrect: 0
        }))
    }

    nextQuestion = () => {

        const { questions } = this.props

        setTimeout( () => {
            this.setState((prev) => ({
                actualQuestion: prev.actualQuestion === questions.length ? questions.length : prev.actualQuestion + 1
            }))
        },300)

    }

    back = () => {
        this.setState((prev) => ({
            actualQuestion: prev.actualQuestion === 1 ? 1 : prev.actualQuestion - 1
        }))
    }

    showResults = () => {
        this.setState(() => ({
            seeResults: true
        }))
    }


    onCorrect() {
        this.setState((prev) => ({
            correct: prev.correct + 1
        }))

        if (this.state.actualQuestion < this.props.questions.length)
            this.nextQuestion()
        else
            this.showResults()
    }

    onIncorrect() {
        this.setState((prev) => ({
            incorrect: prev.incorrect + 1
        }))

        if (this.state.actualQuestion < this.props.questions.length)
            this.nextQuestion()
        else
            this.showResults()
    }

    render() {


        const { questions, id , navigation } = this.props
        const { actualQuestion, seeResults, correct, incorrect } = this.state


        if (seeResults) {
            return (
                <CardResults restart={ () => this.onRestartQuiz()} correct={correct} questions={questions.length} deck={id} navigation={navigation} />
            )
        }


        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.back}>
                        <Text> Back </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}> {actualQuestion} / {questions.length} </Text>

                    {actualQuestion < questions.length && (
                        <TouchableOpacity onPress={this.nextQuestion}>
                            <Text> Next </Text>
                        </TouchableOpacity>
                    )}
                    {actualQuestion === questions.length && (
                        <TouchableOpacity onPress={this.showResults}>
                            <Text>
                                See Results
                        </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {!seeResults && actualQuestion <= questions.length && (
                    <Card question={questions[actualQuestion - 1]} correct={() => this.onCorrect()} incorrect={() => this.onIncorrect()} />
                )}


            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 25
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})


function mapStateToProps({ decks }, { navigation }) {
    const { id } = navigation.state.params;

    return {
        questions: decks[id].questions,
        id
    }
}

export default connect(mapStateToProps)(Quiz)
