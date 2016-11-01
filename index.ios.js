
import React, { AppRegistry } from 'react-native';
import AwesomeProject from './app'

// import your stories
configure(function() {
    require('./stories');
}, module);

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
