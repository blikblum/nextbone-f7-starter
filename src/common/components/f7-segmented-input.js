import { classMap, Component, html } from 'component'
import { property } from 'lit-element'
import { event } from 'nextbone'
import './f7-segmented-input.scss'

class SegmentedChangeEvent extends Event {
  value

  constructor(value) {
    super('change', { bubbles: true })
    this.value = value
  }
}

class F7SegmentedInput extends Component {
  @property({ type: String })
  name

  @property({ type: Boolean })
  raised

  @property({ type: Boolean })
  strong

  @property({ attribute: false })
  items

  @property({ type: Boolean })
  small

  @property({})
  value

  @event('click', 'a')
  buttonClick(e) {
    e.preventDefault()
    const button = e.selectorTarget
    this.value = button.value
    this.dispatchEvent(new SegmentedChangeEvent(button.value))
  }

  render() {
    return html`
      <div
        class="segmented ${classMap({
          'segmented-strong': this.strong,
          'segmented-raised': this.raised,
        })}"
      >
        ${this.items.map((item) => {
          return html`<a
            href="#"
            class="button ${classMap({
              'button-active': this.value === item.value,
              'button-small': this.small,
            })}"
            .value=${item.value}
            >${item.name}</a
          >`
        })}
        ${this.strong ? html`<span class="segmented-highlight"></span>` : ''}
      </div>
    `
  }
}

customElements.define('f7-segmented-input', F7SegmentedInput)

export { F7SegmentedInput }
