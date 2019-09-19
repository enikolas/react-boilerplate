import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HelloWorld from './HelloWorld';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('HelloWorld', () => {
  it('Should render properly', () => {
    act(() => {
      render(<HelloWorld />, container);
    });

    expect(container.textContent).toBe('Hello World!');
  });
});
