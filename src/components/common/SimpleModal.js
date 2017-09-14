import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const SimpleModal = ({ modalVisible, children, setModalVisible }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
      <Modal
        animationType={'slide'}
        transparent
        visible={modalVisible}
        onRequestClose={() => { }}
      >
       <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
              {children}
            </Text>
          </CardSection>

          <CardSection>
            <Button
              onPress={() => { setModalVisible(false); }}
            >
              Okay
            </Button>
          </CardSection>
       </View>
      </Modal>
  );
};

const styles = {
  cardSectionStyle: {
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

export { SimpleModal };
