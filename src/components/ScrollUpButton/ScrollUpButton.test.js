import React from 'react';
import renderer from 'react-test-renderer';
import ScrollUpButton from './ScrollUpButton';


it('renders a project card', () => {
  const tree = renderer.create(
    <ScrollUpButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

