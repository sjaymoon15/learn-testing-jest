import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { exportAllDeclaration } from '@babel/types';

// jsdom simulates how a browser behaves in testing
it('shows a commet box', () => {
  // this is a fake div. not a real div in browser.
  // jsdom helps us with testing by "create" "div"
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  // look inside the div and checks to see if the commentbox is in there
  expect(div.innerHTML).toContain('Comment Box');
  // look at the div and remove (unmount) App component (or any components) inside the div
  ReactDOM.unmountComponentAtNode(div);
});
