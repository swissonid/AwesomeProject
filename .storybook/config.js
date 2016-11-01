/* @Flow */

import { configure } from '@kadira/storybook';

function loadStories() {
    require('../storybook/stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
