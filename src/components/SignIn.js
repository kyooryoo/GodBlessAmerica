import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signinUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignIn extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.signinUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign in
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email:"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password:"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>

        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>
          {this.props.error}
        </Text>

      </View>
    );
  }
}

const mapStateToProps = ({ signin }) => {
  const { email, password, error, loading } = signin;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, signinUser
})(SignIn);
