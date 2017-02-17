# Localization

```javascript
import dataset from './locales/en-us.json';

const locale = key => {

    if (!dataset[key]) {

        console.warn(`Missing locale key ${key}`);

    }

    return dataset[key] || `{{${key}}}`;

};

export default locale;
```
