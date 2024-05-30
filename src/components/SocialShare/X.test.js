import React from 'react';
import renderer from 'react-test-renderer';
import XCard from './X';

it('renders a project card', () => {
  const tree = renderer.create(
    <XCard/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

