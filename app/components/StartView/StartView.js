/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ActionButton from 'react-native-action-button'
import EmptyListItem from '../EmptyListItem'
type StartViewProps = {
  helloText: string,
  secondText: string

};

export default class StartView extends Component {
  props: StartViewProps;
  constructor(props: StartViewProps){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>


        <EmptyListItem color={"#B6B7B8"}/>
        <View style={{height:16}}/>
        <EmptyListItem color={"#808285"}/>

        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress={() => console.log("hallo")}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2F3338',
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});