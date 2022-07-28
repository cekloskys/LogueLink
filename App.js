/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
//import type {Node} from 'react';
import Router from './src/navigation/Router';
import {LogBox} from 'react-native';
import {client} from './apollo';
import {ApolloProvider} from '@apollo/client';
import StatusBar from 'react-native/Libraries/Components/StatusBar/StatusBar';
StatusBar.setBarStyle('dark-content', true);

const App/*: () => Node */= () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

// LogBox.ignoreLogs(['Reanimated 2']);
//LogBox.ignoreLogs(['Reanimated 2']);

LogBox.ignoreLogs(['Warning: ...']);
export default App;
