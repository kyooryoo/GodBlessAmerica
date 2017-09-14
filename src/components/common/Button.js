import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.buttonStyle]}>
      <Text style={[textStyle, props.textStyle]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffd700',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffd700',
    marginVertical: 5,
  }
};

export { Button };
