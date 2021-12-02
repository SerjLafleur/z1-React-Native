import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    name: String
}

const Menu = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(props.name)}
            style={styles.container}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 7,
        marginRight: 5
    }
})

export default Menu