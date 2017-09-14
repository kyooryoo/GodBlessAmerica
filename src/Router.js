import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene
          key="home"
          component={Home}
          title="Home Page"
          leftTitle="Sign in"
          rightTitle="Sign up"
          onLeft={() => Actions.signin()}
          onRight={() => Actions.signup()}
        />
        <Scene
          key="signin"
          component={SignIn}
          title="Sign in"
        />
        <Scene
          key="signup"
          component={SignUp}
          title="Sign up"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
