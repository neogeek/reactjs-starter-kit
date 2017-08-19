import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    state = {
        'label': 'Hello, Button!'
    };

    static propTypes = {
        'href': PropTypes.string.isRequired,
        'label': PropTypes.string.isRequired
    };

    constructor (props) {

        super(props);

        this.state = {
            'href': props.href,
            'label': props.label
        };

    }

    render () {

        return (
            <a href={this.state.href} className="button">{this.state.label}</a>
        );

    }

}

export default Button;
