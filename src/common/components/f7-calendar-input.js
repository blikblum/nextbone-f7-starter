import { Component, html, property } from 'component'
import Framework7 from 'wc-f7'

class F7CalendarInput extends Component {
  @property({ type: String })
  placeholder

  firstUpdated() {
    const options = this.options || {}
    this._calendar = Framework7.instance.calendar.create({
      ...options,
      inputEl: this.renderRoot.querySelector('input'),
      on: {
        change: (calendar, value) => {
          this.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }))
        },
      },
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this._calendar) {
      this._calendar.destroy()
    }
  }

  render() {
    return html` <input type="text" placeholder=${this.placeholder || null} readonly /> `
  }
}

customElements.define('f7-calendar-input', F7CalendarInput)
