import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (

    <AuthStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
        <AuthStack.Screen name="SingIn" component={SignIn} />
    </AuthStack.Navigator>

);

export default AuthRoutes;