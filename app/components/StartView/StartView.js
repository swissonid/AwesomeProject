/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type StartViewProps = {
  helloText: string,
  secondText: string
};

export default class StartView extends Component {
  props: StartViewProps
  constructor(props: StartViewProps){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.helloText}
        </Text>

        <Text style={styles.instructions}>
         {this.props.secondText}
        </Text>
        
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});