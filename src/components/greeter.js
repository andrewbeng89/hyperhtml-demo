import hyperhtml from 'hyperhtml-element';

const { wire } = hyperhtml;
export default ({ name }) =>
  wire()`
    <p>Hello, ${name}!</p>
  `;
