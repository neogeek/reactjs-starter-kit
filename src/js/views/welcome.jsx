import React, {Component} from 'react';

import {Text} from '../components';

class WelcomeView extends Component {

    state = {
        'message': 'Welcome!'
    };

    render () {

        return (
            <Text content={this.state.message} />
        );

    }

}

export default WelcomeView;
