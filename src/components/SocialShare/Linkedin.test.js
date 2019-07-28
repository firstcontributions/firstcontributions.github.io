import React from 'react';
import renderer from 'react-test-renderer';
import LinkedinLink from './Linkedin';

it('renders a project card', () => {
  const tree = renderer.create(
    <LinkedinLink/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
