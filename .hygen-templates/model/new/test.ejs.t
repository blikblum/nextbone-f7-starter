import { expect } from '@open-wc/testing'
import { <%- name %> } from './<%- name.toLowerCase() %>.js'

describe('<%- name %>', () => {
  let model
  beforeEach(() => {
    model = new <%- name %>()
  })

  it('should xx', () => {
    expect(model).to.be.equal(model)
  })
})
