import Framework7 from 'wc-f7'

class FormSaveEvent extends Event {
  attrs

  model

  constructor(model, attrs) {
    super('save', { bubbles: true })
    this.model = model
    this.attrs = attrs
  }
}

export const closePopup = (e) => {
  e.preventDefault()
  const app = Framework7.instance
  app.popup.close()
}

export const closePage = (el) => {
  const app = Framework7.instance
  const parent = el.parentElement
  if (el.classList.contains('popup') || (parent && parent.classList.contains('popup'))) {
    app.popup.close()
  } else {
    app.views.main.router.back()
  }
}

export const withSaveGuard = (BaseElement) => {
  class SaveGuard extends BaseElement {
    performSave({ checkValid = true } = {}) {
      if (!checkValid || this.form.isValid({ update: true, touch: true })) {
        const model = this[this.form.model]
        const attributes = this.form.getAttributes()
        const attrs = model.pick(...attributes)
        this.dispatchEvent(new FormSaveEvent(model, attrs))
      }
    }

    isDataDirty() {
      return this.form.isDirty()
    }

    handleSave(e) {
      e.preventDefault()
      this.performSave()
    }

    handleClose() {
      const app = Framework7.instance
      if (this.isDataDirty()) {
        const dialog = app.dialog.create({
          title: 'Alterações não salvas',
          text: 'Existem alterações não salvas. O que deseja fazer?',
          destroyOnClose: true,
          buttons: [
            {
              text: 'Descartar',
              onClick: () => {
                closePage(this)
              },
            },
            {
              text: 'Salvar',
              onClick: () => {
                this.performSave()
              },
            },
          ],
        })
        dialog.open()
      } else {
        closePage(this)
      }
    }
  }

  return SaveGuard
}
