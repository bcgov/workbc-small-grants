import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://workbc-grants-dev.pathfinder.gov.bc.ca/">WorkBC Grants</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});