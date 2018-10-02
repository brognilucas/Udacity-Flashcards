import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../redux/actions/decks'
class AddQuestion extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: `Add Question to ${params.deck.name}`
        };
    };

    state = {
        question: '',
        answer: ''
    }

    changeQuestion = (e) => {
        this.setState(() => ({
            question: e
        }))
    }

    changeAnswer = (e) => {
        this.setState(() => ({
            answer: e
        }))
    }

    submitQuestion = () => {
        const { params } = this.props.navigation.state;
        const { deck } = params

        this.props.dispatch(addQuestion(this.state , deck.id))

        this.setState(() => ({
            answer: '',
            question: ''
        }))
    }

    render() {
        const { answer, question } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.question}>
                    <Text style={styles.questionTxt}>
                        What is the question?
                </Text>
                    <TextInput style={styles.questionInput} placeholder='Type here the question' 
                    onChangeText={this.changeQuestion} value={question}/>
                </View>
                <View style={styles.answer}>
                    <Text style={styles.questionTxt}>
                        What is the Answer?
                </Text>
                    <TextInput style={styles.questionInput} placeholder='Type here the answer' 
                    onChangeText={this.changeAnswer} value={answer}/>
                </View>
                <TouchableOpacity style={[styles.btn, question.length === 0 ||
                    answer.length === 0 ? { opacity: 0.3 } : { opacity: 1 }]}
                    disabled={answer.length === 0 || !question.length === 0}>

                    <Text style={styles.btnText} onPress={this.submitQuestion}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    question: {
        marginTop: 100,
        alignItems: 'center'
    },
    answer: {
        marginTop: 20,
        alignItems: 'center'
    },
    questionTxt: {
        fontSize: 20,
    },
    questionInput: {
        fontSize: 20,
        borderRadius: 4,
        borderStyle: 'solid',
        marginTop: 20,
        width: 280,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        maxHeight: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
        marginTop: 20,
        alignContent: 'center',
        borderRadius: 6,
        backgroundColor: '#1D2D44'
    },
    btnText: {
        fontSize: 20,
        color: '#FFF'
    }
})

export default connect()(AddQuestion)