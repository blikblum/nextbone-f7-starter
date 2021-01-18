import { html } from 'component'

export function checkbox(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  return html`
    <label class="item-checkbox item-content">
      <input type="checkbox" name=${attr} .checked=${!!value} />
      <i class="icon icon-checkbox"></i>
      <div class="item-inner">
        <div class="item-title">${title}</div>
      </div>
    </label>
  `
}
