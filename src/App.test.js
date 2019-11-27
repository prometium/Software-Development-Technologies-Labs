import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('initially displays 6 radio buttons, first of them checked', () => {
    const wrapper = mount(<App />);

    const radioButtons = wrapper.find('input[type="radio"]');

    expect(radioButtons).toHaveLength(6);

    expect(radioButtons.map(el => el.getDOMNode().checked)).toEqual([
      true,
      ...Array(5).fill(false)
    ]);
  });

  it('active radio button can be changed', async () => {
    const wrapper = mount(<App />);

    const radioButtons = wrapper.find('input[type="radio"]');

    radioButtons.at(1).simulate('change');

    expect(radioButtons.map(el => el.getDOMNode().checked)).toEqual([
      false,
      true,
      ...Array(4).fill(false)
    ]);
  });
});
