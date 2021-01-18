import { html, classMap, ifDefined } from 'component'

export const normalizeSelectItems = (items) => {
  if (items) {
    return items.map((item) => {
      if (typeof item === 'string') {
        return { name: item, value: item }
      }
      return item
    })
  }
}

export const select = (form, attr, title, items, options = {}) => {
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
        <div class="item-input-wrap">
          <select
            name=${attr}
            ?disabled=${options.disabled}
            data-format=${ifDefined(options.format)}
          >
            <option hidden ?selected=${value === undefined}></option>
            ${items.map((item) => {
              return html`
                <option value=${item.value} ?selected=${value === item.value}>${item.name}</option>
              `
            })}
          </select>
          <div class="item-input-error-message">${invalidText}</div>
        </div>
      </div>
    </div>
  `
}
