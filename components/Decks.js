import React, { Component } from 'react'
import DeckCard from './DeckCard';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import FloattingButton from './FloattingButton';
class Decks extends Component {

    renderItem = ({item}) => {
        return <DeckCard text={item}  />
    }

    render() {

        const text = [
            'lmao', 'touchdown', 'pas deep right', 'lmao', 'touchdown', 'pas deep right',
            'lmao', 'touchdown', 'pas deep right', 'lmao', 'touchdown', 'pas deep right'
        ]
        return (
            <View style={styles.container}>
                <FlatList data={text} renderItem={this.renderItem} />
                <FloattingButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    }
})

export default Decks