import React from 'React'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
export default function FloattingButton() {
    return (
        <TouchableOpacity style={styles.btn}>
            <Entypo name='plus' style={styles.btnText}/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4C5760',
        position: 'absolute',
        bottom: 10,
        right: 10,
        flex: 1
    },
    btnText: { 
        fontSize: 40,
        marginTop: 10,
        marginBottom: 10,
        color: '#FFF',
        textAlign: 'center', 
        alignItems: 'center'
    }
})
