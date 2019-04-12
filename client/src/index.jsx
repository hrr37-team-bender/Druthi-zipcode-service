import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';


window.CheckZipcode = App;
render(<App />, document.getElementById('app') || document.createElement('div'));