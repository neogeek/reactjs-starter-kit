import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Text extends Component {

    state = {
        'content': 'Hello, World!'
    };

    static propTypes = {
        'content': PropTypes.string.isRequired
    };

    constructor (props) {

        super(props);

        this.state = {
            'content': props.content
        };

    }

    render () {

        return (
            <p>{this.state.content}</p>
        );

    }

}

export default Text;
