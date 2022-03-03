import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { AuthRouter } from './auth.routes'
import { Background } from '../components/Background';

export function Routes() {
  return(
    <Background>
      <NavigationContainer>
        <AuthRouter />
      </NavigationContainer>
    </Background>
  )
}