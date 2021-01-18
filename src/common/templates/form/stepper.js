import { html } from 'component'

export function stepper(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  return html`
    <div class="stepper stepper-raised stepper-small stepper-init" data-manual-input-mode="true">
      <div class="stepper-button-minus"></div>
      <div class="stepper-input-wrap">
        <input
          type="text"
          name=${attr}
          min=${options.min || 0}
          max=${options.max || 999999}
          step=${options.step || 1}
          data-format="number"
          .value=${value || null}
        />
      </div>
      <div class="stepper-button-plus"></div>
    </div>
  `
}

export function stepperInput(form, attr, title, options = {}) {
  const value = form.getValue(attr, options.model)

  return html`
    <div class="item-content item-input">
      <div class="item-inner">
        <div class="item-title item-label">${title}</div>
        <div
          class="stepper stepper-raised stepper-small stepper-init"
          data-manual-input-mode="true"
        >
          <div class="stepper-button-minus"></div>
          <div class="stepper-input-wrap">
            <input
              type="text"
              name=${attr}
              min=${options.min || 0}
              max=${options.max || 999999}
              step=${options.step || 1}
              data-format="number"
              .value=${value || null}
            />
          </div>
          <div class="stepper-button-plus"></div>
        </div>
      </div>
    </div>
  `
}
