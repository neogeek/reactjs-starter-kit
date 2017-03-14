import React from 'react';

import {Link} from 'react-router-dom';

const AppView = React.createClass({

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
                    {this.props.children}
                </main>
            </div>
        );

    }

});

export default AppView;
