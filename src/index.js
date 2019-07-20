import hyperelement from 'hyperhtml-element';
import './components/greeter';

const { bind } = hyperelement;
const root = document.getElementById('root');
let name = '';
const onNameInput = render => ({ target }) => {
  name = target.value;
  render();
};
let names = ['alice', 'bob', 'charlie'];
const onNameEnter = render => ({ code }) => {
  if (code === 'Enter') {
    names = [...names, name];
    name = '';
    render();
  }
};

const render = () => bind(root)`
    <div style="padding: 20px"><h1>Welcome to hyperhtml-demo</h1></div>
    <h4>Please enter your name:</h4>
    <input value="${name}" oninput="${onNameInput(render)}" onkeydown="${onNameEnter(render)}">
    ${names.map(n => (`
      <my-greeter name=${n}></my-greeter>
    `))}
  `;
render();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
