import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../redux/actions/decks'
class NewDeck extends Component {

    state = {
        deckName: ''
    }

    submit = () => {
        this.props.dispatch(addDeck(this.state.deckName))

        this.setState({
            deckName: ''
        })
        
        this.props.navigation.goBack()

    }
    
    render() {
        return (
            <View style={{ padding: 10, flex: 1 }}>

                <Text style={styles.text}>
                    Deck Name </Text>
                <TextInput style={styles.dataText} onChangeText={(e) => this.setState(() => ({
                    deckName: e
                }))} placeholder='Type here your deck name' />

                <TouchableOpacity style={[styles.btn, this.state.deckName.length === 0 ? { opacity: 0.3 } : { opacity: 1 }]}
                    disabled={this.state.deckName.length === 0}
                    onPress={this.submit} >
                    <Text style={styles.btnText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 100
    },
    dataText: {
        height: 20,
        fontSize: 20,
        marginTop: 10,
        alignContent: 'center',
        textAlign: 'center'
    },
    btnText: {
        color: '#FFF',
        fontSize: 20,
        alignContent: 'center',
        marginLeft: 80,
        marginTop: 5
    },
    btn: {
        width: 230,
        height: 40,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 150,
        textAlign: 'center',
        alignContent: 'center',
        borderRadius: 6,
        backgroundColor: '#1D2D44'
    }
})

export default connect()(NewDeck)