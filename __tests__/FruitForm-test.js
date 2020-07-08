/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent, act} from 'react-native-testing-library';
import FruitForm from '../FruitForm';

const mockSubmitFruit = jest.fn();

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
  expect(mockSubmitFruit).toBeCalledWith({favourite_fruit: 'banana'});
});
