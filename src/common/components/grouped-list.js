import { Component, html, property } from 'component'
import { view, state } from 'nextbone'

@view
class GroupedList extends Component {
  @state
  collection

  @property({ type: String, attribute: 'group-by' })
  groupBy

  @property({ attribute: false })
  itemRender

  @property({ type: Boolean })
  media

  render() {
    const grouped = this.collection
      ? this.collection.groupBy((model) => {
          return model.get(this.groupBy)
        })
      : {}
    return html`
      <div class="list ${this.media ? 'media-list' : ''}">
        ${this.collection.isLoading
          ? html`
              <ul>
                <div class="text-align-center"><f7-preloader class="margin"></f7-preloader></div>
              </ul>
            `
          : Object.keys(grouped).map(
              (groupKey) =>
                html`
                  <div class="list-group">
                    <ul>
                      <li class="list-group-title">${groupKey}</li>
                      ${grouped[groupKey].map((model) => {
                        return this.itemRender(model)
                      })}
                    </ul>
                  </div>
                `
            )}
      </div>
    `
  }
}

customElements.define('grouped-list', GroupedList)
