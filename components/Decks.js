import React, { Component } from 'react'
import DeckCard from './DeckCard';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'
import FloattingButton from './FloattingButton';
import { connect } from 'react-redux'
class Decks extends Component {

    renderItem = ({ item }) => {
        return <DeckCard key={item} id={item} navigation={this.props.navigation} />
    }


    render() {
        const { decks } = this.props

        return (
            <View style={styles.container}>
                <FlatList data={decks} renderItem={this.renderItem} />
                <FloattingButton navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    card: {
        flex: 1,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: '#93A8AC',
        flexDirection: 'column',
        height: 'auto'
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        marginTop: 30
    },
    subtitle: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFEEE',
        marginTop: 10
    }
})

function mapStateToProps({ decks }) {

    return {
        decks: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(Decks)