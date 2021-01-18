---
to: <%- path%><%- tagName %>.js
---
import { Component, html } from 'component'
import './<%- tagName %>.scss'

class <%- componentName %> extends Component {
  render () {
    const title = 'My Page'
    return html `
      <!-- Top Navbar -->
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner">
          <div class="left">
            <a href="#" class="link back">
              <i class="icon icon-back"></i>
              <span class="if-not-md">Back</span>
            </a>
          </div>
          <div class="title sliding">${title}</div>
        </div>
      </div>
      <!-- Scrollable page content-->
      <div class="page-content">
        
      </div>
    `
  }
}

customElements.define('<%- tagName %>', <%- componentName %>)

export { <%- componentName %> }
