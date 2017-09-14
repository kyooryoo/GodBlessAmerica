import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Feedback = ({ text, visible, onOk }) => {
  const { containerStyle, textStyle, labelStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={labelStyle}>
          <Text style={textStyle}>
            {text}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onOk}>Ok</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  labelStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Feedback };
