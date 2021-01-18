import { html } from 'component'

export function radio(form, attr, title, options = {}) {
  const radioValue = options.value || title
  const value = form.getValue(attr, options.model)

  return html`
    <label class="item-radio item-content">
      <input type="radio" name=${attr} .value=${radioValue} .checked=${value === radioValue} />
      <i class="icon icon-radio"></i>
      <div class="item-inner">
        <div class="item-title">${title}</div>
      </div>
    </label>
  `
}
