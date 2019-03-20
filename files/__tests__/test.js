'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let use... = require('../src');

function render(val) {
  return ReactTestRenderer.create(val);
}

test('it should render React component using hook', t => {
  function Component() {
    let value = use...();
    return h('div');
  }

  let input = render(h(Component));

  t.is(input.toJSON().props.value, '...');
});
