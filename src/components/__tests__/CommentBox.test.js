import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  ); // using mount for education purpose. shallow should also work fine.
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    // instead of waiting for the rerender to finish
    // will force the component to update by using update() from enzyme
    wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a text area that should be emptied when the input is submitted', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
