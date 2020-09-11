import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const component = renderer.create(
  <Link page="https://workbc-grants-dev.pathfinder.gov.bc.ca/">WorkBC Grants</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
