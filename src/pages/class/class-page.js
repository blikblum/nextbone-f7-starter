import { LitElement, html } from 'lit-element'

export class ClassPage extends LitElement {
  static get pageName() {
    return 'class'
  }

  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back">
              <i class="icon icon-back"></i>
              <span class="if-not-md">Back</span>
            </a>
          </div>
          <div class="title">Class Route</div>
        </div>
      </div>
      <div class="page-content">
        <div class="block-title">Using class routes</div>
        <div class="block">
          <p>Component and data defined declaratively in class route</p>
        </div>
        <div class="block block-strong">
          <p>User: ${this.user.name}</p>
          <p>Email: ${this.user.email}</p>
        </div>
      </div>
    `
  }
}

customElements.define('class-page', ClassPage)
