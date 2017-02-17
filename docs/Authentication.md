# Authentication

*index.jsx*

```javascript
const isLoggedIn = () => true;

const requireAuth = (nextState, replace) => {

    if (!isLoggedIn()) {

        replace({
            'pathname': '/login',
            'state': {
                'nextPathname': nextState.location.pathname
            }
        });

    }

};
```
