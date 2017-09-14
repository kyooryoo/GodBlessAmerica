import React from 'react';
import { View, Text } from 'react-native';

const NumBox = (props) => {
  const { labelStyle, containerStyle } = styles;

  return (
    <View style={[containerStyle, props.containerStyle]}>
      <Text style={[labelStyle, props.textStyle]}>{props.number}</Text>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
  },
  containerStyle: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffd700',
  }
};

export { NumBox };
