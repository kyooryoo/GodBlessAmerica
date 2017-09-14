import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBcSEXafai3ymCXmKVtFoD6pN4pFdwxPF0',
      authDomain: 'godblessamerica-ling.firebaseapp.com',
      databaseURL: 'https://godblessamerica-ling.firebaseio.com',
      projectId: 'godblessamerica-ling',
      storageBucket: 'godblessamerica-ling.appspot.com',
      messagingSenderId: '982403531344'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <Home />
        </View>
      </Provider>
    );
  }
}

export default App;
