import Framework7 from 'wc-f7'
import { render, html } from 'lit-html'

const openPopup = (el, closed) => {
  const popup = Framework7.instance.popup.create({
    el,
    on: {
      closed,
    },
  })
  popup.open()
  return popup
}

class F7Popup extends HTMLElement {
  constructor() {
    super()
    this._open = false
    this._popup = null
    this.classList.add('popup')
  }

  get open() {
    return this._open
  }

  set open(value) {
    if (value !== this._open) {
      this._open = value
      if (value) {
        if (this.render) {
          render(this.render(), this)
        }
        this._popup = openPopup(this, async (instance) => {
          this._open = false
          if (this.render) {
            render(html``, this)
          }
          await 0
          instance.destroy()
        })
      } else if (this._popup) {
        this._popup.close()
        this._popup = null
      }
    }
  }
}

customElements.define('f7-popup', F7Popup)
