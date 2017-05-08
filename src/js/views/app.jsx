import React from 'react';

import {Link} from 'react-router-dom';

class AppView extends React.Component {

    render () {

        return (
            <div>
                <header>
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt="React.js Starter Kit" />
                    </Link>
                    <nav className="site-navigation">
                        <Link to="/">Home</Link>
                        <Link to="/about/">About</Link>
                    </nav>
                </header>
                <main>
                    {React.cloneElement(this.props.children, this.props)}
                </main>
            </div>
        );

    }

}

export default AppView;
