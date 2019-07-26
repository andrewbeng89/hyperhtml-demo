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
      <p>
        Hello, ${this.name}!
      </p>
    `;
  }

  created() {
    this.render();
  }
}

Greeter.define('my-greeter');
