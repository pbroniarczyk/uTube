import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from '../components/App';


it('App render test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});