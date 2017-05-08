import React, {Component} from 'react';

import {Text} from '../components';

class WelcomeView extends Component {

    state = {
        'message': 'Welcome!'
    };

    render () {

        return (
            <div>
                <button onClick={this.props.incrementPageViews.bind(null, 'welcome')}>Oh hai</button>
                <Text content={this.state.message} />
            </div>
        );

    }

}

export default WelcomeView;
