import React, {Component} from 'react';

import {Text} from '../components';

class NoMatchView extends Component {

    state = {
        'message': 'No Match'
    };

    render () {

        return (
            <Text content={this.state.message} />
        );

    }

}

export default NoMatchView;
