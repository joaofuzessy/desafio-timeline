import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));


