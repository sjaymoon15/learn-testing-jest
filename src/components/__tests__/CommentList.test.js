import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

// to have initial comments for test,
// instead of importing commentBox component or calling actions
// send the initialState object to Root component.

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {});
