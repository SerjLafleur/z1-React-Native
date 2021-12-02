import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native';
import Menu from '../../components/menu/Menu';
import styles from './styles'

const Learn = () => {


    return (
        <View style={styles.container}>
            <Text>Hola desde Learn</Text>

            <View style={{ height: 35, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Menu name='All' />
                    <Menu name='Favorites' />
                    <Menu name='Harm Reduction' />
                    <Menu name='Integration' />
                    <Menu name='Mindfulness' />
                    <Menu name='Music' />
                </ScrollView>
            </View>
        </View>
    )
}

export default Learn