import { Utils } from 'wc-f7'

class F7Preloader extends HTMLElement {
  constructor() {
    super()
    this.classList.add('preloader')
  }

  connectedCallback() {
    this.innerHTML = Utils.mdPreloaderContent
  }
}

customElements.define('f7-preloader', F7Preloader)
