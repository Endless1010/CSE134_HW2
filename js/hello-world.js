// Custom element #2: <hello-world>
// Logs a greeting to the browser console when the element is added to the page.
// It never touches the DOM (no rendering, no shadow root, no attribute changes).
class HelloWorld extends HTMLElement {
  connectedCallback() {
    console.log('Hello World!');
  }
}

customElements.define('hello-world', HelloWorld);
