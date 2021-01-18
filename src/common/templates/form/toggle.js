import { html, classMap } from 'component'

export function toggle(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  return html`
    <span>${title}</span>
    <label class="toggle toggle-init color-${options.color || 'blue'}">
      <input type="checkbox" name=${attr} .checked=${!!value} />
      <span class="toggle-icon"></span>
    </label>
  `
}

export function toggleInput(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  return html`
    <div class="item-content item-input">
      <div class="item-inner">
        <div class="item-title item-label">${title}</div>
        <div>
          <label class="toggle toggle-init color-${options.color || 'blue'}">
            <input type="checkbox" name=${attr} .checked=${!!value} />
            <span class="toggle-icon"></span>
          </label>
        </div>
      </div>
    </div>
  `
}
