import { html, classMap, ifDefined } from 'component'

import 'components/f7-segmented-input'

export const segmented = (form, attr, title, items, options = {}) => {
  const value = form.getValue(attr, options.model)

  const invalidText = form.touched[attr] && form.errors[attr]

  return html`
    <div
      class="item-content item-input ${classMap({
        'item-input-invalid': invalidText,
        'item-input-with-error-message': invalidText,
      })}"
    >
      <div class="item-inner">
        <div class="item-title item-label">${title}</div>
        <div class="item-input-wrap no-line">
          <f7-segmented-input
            name=${attr}
            class="display-flex"
            .items=${items}
            .value=${value}
            small
            raised
            form-bind
            ?disabled=${options.disabled}
            data-format=${ifDefined(options.format)}
          >
          </f7-segmented-input>
          <div class="item-input-error-message">${invalidText}</div>
        </div>
      </div>
    </div>
  `
}
