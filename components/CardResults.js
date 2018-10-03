import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { saveHistory } from '../redux/actions/history'
import { connect } from 'react-redux'
class CardResults extends Component {


    static navigationOptions = ({ navigation }) => {

        return {
            title: `Results `
        };
    };
    
    saveHistory = () => {
        const { deck, correct , questions , dispatch} = this.props


        dispatch(saveHistory({
            deck, correct, questions
        }))

        this.props.navigation.goBack()

    }

    goToDeck = () => {
        
        this.props.navigation.goBack()
    }

    render() {

        const { correct,  questions , restart } = this.props

        return (
            <View style={styles.card} >
                <MaterialCommunityIcons name='approval' size={50} color={'#FFF'} />
                <Text style={styles.question}>
                    You acerted {correct} from {questions }
                </Text>
                <TouchableOpacity onPress={this.saveHistory} style={styles.btn}>
                    <Text style={styles.btnText} onPress={this.saveHistory}> Save on History  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToDeck} style={styles.btn}>
                    <Text style={styles.btnText} > Back to Deck </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={restart} style={styles.btn}>
                    <Text style={styles.btnText} onPress={restart}>  Restart Quiz </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#769FB6'
    },
    question: { 
        fontSize: 25, 
        color: '#FBD1A2'
    },
    btn: {
        flex: 1, maxHeight: 30,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#1D4E89',
        marginLeft: 10, marginRight: 10
    },
    btnText: {
        fontSize: 15, 
        color: '#FFF',
        textAlign: 'center'
    }
})

export default connect()(CardResults)