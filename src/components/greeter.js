import { wire } from 'hyperhtml';

export default ({ name }) =>
  wire()`
    <p>Hello, ${name}!</p>
  `;
