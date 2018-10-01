import React, { Component } from 'react'
import DeckCard from './DeckCard';
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import FloattingButton from './FloattingButton';
import { connect } from 'react-redux'
class Decks extends Component {

    renderItem = ({ item }) => {
        return <DeckCard deck={item} />
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    { this.props.decks.map( (item) => {
                        return <DeckCard key={item.id} deck={item}/>
                    })}
                </ScrollView>

                <FloattingButton navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    }
})

function mapStateToProps({ decks }) {

    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(Decks)