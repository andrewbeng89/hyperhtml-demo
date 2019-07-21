import HyperHTMLElement from 'hyperhtml-element';

class Greeter extends HyperHTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    return this.html`
      <p>Hello, ${this.name}!</p>
      <slot name="pleasure">
        <p>Nice to meet you!</p>
      </slot>
    `;
  }

  created() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }
}

Greeter.define('my-greeter');
