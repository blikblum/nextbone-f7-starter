import { html, classMap } from 'component'

export function textarea(form, attr, title, options = {}) {
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
          <textarea name=${attr} .value=${value || null}></textarea>
          <div class="item-input-error-message">${invalidText}</div>
        </div>
      </div>
    </div>
  `
}
