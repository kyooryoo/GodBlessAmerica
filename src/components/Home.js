import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { generateNums } from '../actions';
import { Card, CardSection, NumBox, Button, Spinner } from './common';

const LOGO = require('../images/logo.png');

class Home extends Component {
  onButtonPress() {
    this.props.generateNums();
  }

  renderButton() {
    if (this.props.loading) {
       return <Spinner size={100 || 'large'} />;
    }

    return (
      <Button
        buttonStyle={{ paddingVertical: 20, bottom: 0 }}
        textStyle={{ fontSize: 40 }}
        onPress={this.onButtonPress.bind(this)}
      >
        Generate
      </Button>
    );
  }

  render() {
    return (
      <ScrollView>
        <Image style={styles.banner} source={LOGO} />
        <Card>
          <CardSection style={styles.resultContainer}>
            <View>
              <Text style={styles.numberTitle}>
                Lucky Balls
              </Text>

              <View style={styles.numberBoxContainer}>
                <NumBox number={this.props.result[0]} />
                <NumBox number={this.props.result[1]} />
                <NumBox number={this.props.result[2]} />
                <NumBox number={this.props.result[3]} />
                <NumBox number={this.props.result[4]} />
              </View>
            </View>

            <View>
              <Text style={styles.numberTitle}>
                Power Ball
              </Text>

              <View style={styles.numberBoxContainer}>
                <NumBox
                  number={this.props.result[5]}
                  containerStyle={{ backgroundColor: '#ffd700' }}
                />
              </View>
            </View>
          </CardSection>

          <CardSection style={{ padding: 5 }}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  resultContainer: {
    flexDirection: 'column',
    paddingBottom: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  numberTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  numberBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  banner: {
    width: undefined,
    resizeMode: 'contain',
    position: 'relative'
  },
};

const mapStateToProps = ({ genNums }) => {
  const { result, loading } = genNums;
  return { result, loading };
};

export default connect(mapStateToProps, { generateNums })(Home);
