import React from 'react';
//import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

test('App snapshot test', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot(); //type u to update snapshot in terminal
});
