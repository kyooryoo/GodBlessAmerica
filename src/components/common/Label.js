import React from 'react';
import { View, Text } from 'react-native';

const Label = (props) => {
  const { labelStyle, containerStyle } = styles;

  return (
    <View style={[containerStyle, props.style]}>
      <Text style={[labelStyle, props.style]}>{props.label}</Text>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Label };
