import React, {Component} from 'react';

import Button from '../components/Button';

class WelcomeView extends Component {

    render () {

        return (
            <p>Welcome to <Button href="https://github.com/neogeek/reactjs-starter-kit" label="reactjs-starter-kit" />! A starter-kit built with ❤️ by  <Button href="https://github.com/neogeek/" label="@neogeek" />!</p>
        );

    }

}

export default WelcomeView;
