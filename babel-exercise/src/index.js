/* @jsx createElement */
import {createElement, render} from './react.js'

function Title() {
  return (
    <div>
      <h2>Babel Exercise</h2>
      <p>Does it work?</p>
    </div>
  );
}

render(<Title />, document.querySelector('#root'));