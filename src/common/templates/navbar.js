import { html } from 'lit-element'

export const navbar = ({ title, handleClose }) => {
  return html` <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left ${handleClose ? '' : 'display-none'}">
        <a href="#" class="link" @click=${handleClose}>
          <i class="icon icon-back"></i>
          <span class="if-not-md">Voltar</span>
        </a>
      </div>
      <div class="title">${title}</div>
    </div>
  </div>`
}
