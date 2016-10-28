/* @Flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

type Props = {
    color : string
}

import MockTextItem from './MockTextItem';

export default class EmptyListItem extends Component {
    props:Props

    constructor(props: Props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.emptyItem}>
                    <View style={[styles.emptyCircle, { backgroundColor:this.props.color }]}/>
                    <MockTextItem style= {{ marginLeft:24 }} color={this.props.color}/>
                </View>
            </View>
        );
    }    
}

const minTouchTarget =  48;
const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: minTouchTarget,
    },

    emptyCircle: {
        height: minTouchTarget,
        width: minTouchTarget,
        borderRadius: 50,
    },
    emptyLine: {
        width: 104,
        height: 12,
    },
    emptyItem: {
        flex: 0,
        flexDirection: 'row',
        width: 235,
        height: minTouchTarget
    }
});