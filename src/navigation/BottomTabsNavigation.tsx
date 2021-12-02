import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import navigationString from '../constants/NavigationString';
import { Home, Live, Journey, Add, Learn } from '../screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();



export const BottomTabsNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={navigationString.LEARN}
            >
                <Tab.Screen name={navigationString.HOME} component={Home} />
                <Tab.Screen name={navigationString.LIVE} component={Live} />
                <Tab.Screen name={navigationString.ADD} component={Add} />
                <Tab.Screen name={navigationString.LEARN} component={Learn} />
                <Tab.Screen name={navigationString.JOURNEY} component={Journey} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
