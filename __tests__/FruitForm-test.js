/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent, act} from 'react-native-testing-library';
import FruitForm from '../FruitForm';

const mockSubmitFruit = jest.fn((fruit, event) => {
  console.log('fruit', fruit);
  console.log('event', event);
});

beforeAll(() => {
  global.window = {};
});
afterAll(() => {
  global.window = undefined;
});

test('calls submit function with favourite fruit', async () => {
  const {getByText} = render(<FruitForm submitFruit={mockSubmitFruit} />);
  const bananaOption = getByText('banana');
  const submitBtn = getByText('Submit');

  fireEvent.press(bananaOption);
  await act(() => fireEvent.press(submitBtn));

  // this test will pass
  // expect(mockSubmitFruit).toHaveBeenCalledWith(
  //   {favourite_fruit: 'banana'},
  //   undefined,
  // );

  // this test will fail
  expect(mockSubmitFruit).toBeCalledWith({favourite_fruit: 'banana'});
});
