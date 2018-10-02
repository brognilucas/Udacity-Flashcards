import React, { Component } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { receiveHistory } from '../redux/actions/history'
import { Entypo } from '@expo/vector-icons'

class HistoryQuiz extends Component {


    static navigationOptions = ({ navigation }) => {
      
        return {
            title: `History during Quiz `
        };
    };

    componentDidMount() {
        this.props.dispatch(receiveHistory())
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTextTitle}>  {item.deck} </Text>
                <Text style={styles.cardTextResult}> <Entypo name='area-graph' size={25} /> {item.correct} / {item.questions} </Text>
            </View>
        )
    }

    render() {

        
        const { historyMap } = this.props
        return (
            <View style={{ flex: 1 }}>
               <FlatList data={historyMap} renderItem={this.renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 4,
        backgroundColor: '#388697',
        maxHeight: 200,
        justifyContent: 'center',
        marginTop: 10
    },
    cardTextTitle: {
        fontSize: 25,
        color: '#FFF',
        textAlign: 'center'
    },
    cardTextResult: {
        fontSize: 15,
        color: '#FFF',
        textAlign: 'center'
    }
})

function mapStateToProps({ history, decks }) {
    return {
        historyMap: Object.keys(history).map(h => {
            return {
                deck: decks[history[h].deck].name,
                questions: history[h].questions,
                correct: history[h].correct
            }
        })
    }
}

export default connect(mapStateToProps)(HistoryQuiz)