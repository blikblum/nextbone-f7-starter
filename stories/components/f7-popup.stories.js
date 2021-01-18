import { html } from 'lit-element'
import '../../src/common/components/f7-popup.js'

export default {
  title: 'Components/f7-popup',
}

const openPopup = () => {
  document.querySelector('f7-popup').open = true
}

export const PreRendered = () =>
  html` <button class="button" @click=${openPopup}>Open</button>
    <f7-popup>
      <div class="popup-about">
        <div class="block">
          <p>Pre Rendered</p>
          <!-- Close Popup -->
          <p><a class="link popup-close" href="#">Close popup</a></p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </f7-popup>`

export const LazyRender = () =>
  html` <button class="button" @click=${openPopup}>Open</button>
    <f7-popup
      .render=${() => html`<div class="popup-about">
        <div class="block">
          <p>Lazy Render</p>
          <!-- Close Popup -->
          <p><a class="link popup-close" href="#">Close popup</a></p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>`}
    ></f7-popup>`

export const Page = () =>
  html` <button class="button" @click=${openPopup}>Open</button>
    <f7-popup>
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner">
            <div class="title">Popup</div>
            <div class="right">
              <!-- Link to close popup -->
              <a class="link popup-close">Close</a>
            </div>
          </div>
        </div>
        <div class="page-content">
          <div class="block-title">Page content</div>
        </div>
      </div>
    </f7-popup>`
