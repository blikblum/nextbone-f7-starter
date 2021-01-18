---
to: stories/pages/<%- tagName %>.stories.js
---
import { html } from 'lit-element'
import '../../<%- path%><%- tagName %>.js'

export default {
  title: 'Pages/<%- componentName %>',
}

export const Default = () => html`
  <<%- tagName %> class="page page-current"></<%- tagName %>>
`