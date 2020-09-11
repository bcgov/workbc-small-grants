import React from 'react';
import Link from '../link.react';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const component = renderer.create(
  <Link page="https://workbc-grants-dev.pathfinder.gov.bc.ca/">WorkBC Grants</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
