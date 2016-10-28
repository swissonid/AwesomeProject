/* @Flow */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
type Props = {
    color: string,
};

export default class MockTextItem extends Component {
    props: Props;

    constructor(props: Props){
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{width:104, height:12, backgroundColor: this.props.color}}/>
                <View style={{width:160, height:8, backgroundColor: this.props.color}}/>
                <View style={{width:48, height:8, backgroundColor: this.props.color}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});