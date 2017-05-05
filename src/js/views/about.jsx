import React, {Component} from 'react';

import {Text} from '../components';

class AboutView extends Component {

    state = {
        'message': 'About React.js Starter Kit'
    };

    render () {

        return (
            <Text content={this.state.message} />
        );

    }

}

export default AboutView;
