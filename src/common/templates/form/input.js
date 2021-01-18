import { html, classMap, ifDefined } from 'component'

export function input(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  const invalidText = form.touched[attr] && form.errors[attr]

  const datalistId = options.datalist ? `${attr}-datalist` : undefined

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
          ${options.type === 'date'
            ? html`<input
                type="date"
                name=${attr}
                data-format=${ifDefined(options.format)}
                .valueAsDate=${value !== undefined ? value : null}
              />`
            : html`<input
                  type=${options.type || 'text'}
                  name=${attr}
                  list=${ifDefined(datalistId)}
                  data-format=${ifDefined(options.format)}
                  .value=${value !== undefined ? value : null}
                />
                ${datalistId
                  ? html`
                      <datalist id=${datalistId}>
                        ${options.datalist.map((item) => html` <option>${item}</option> `)}
                      </datalist>
                    `
                  : ''}`}

          <div class="item-input-error-message">${invalidText}</div>
          ${options.info ? html`<div class="item-input-info">${options.info}</div>` : ''}
        </div>
      </div>
    </div>
  `
}
