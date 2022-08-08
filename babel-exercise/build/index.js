/* @jsx createElement */
import { createElement, render } from './react.js';

function Title() {
  return createElement("div", null, createElement("h2", null, "Babel Exercise"), createElement("p", null, "Does it work?"));
}

render(createElement(Title, null), document.querySelector('#root'));