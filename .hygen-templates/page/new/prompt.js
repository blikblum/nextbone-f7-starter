const { camelize } = require('../../utils')
const { normalize } = require('path')

module.exports = {
  prompt: ({ prompter, args }) => {
    if (args.name) {
      return Promise.resolve({ allow: true })
    }

    return prompter.prompt([
      {
        type: 'input',
        name: 'path',
        result(path) {
          const basePath = 'pages'
          return normalize(`src/${basePath}/${path}/`).replace(/\\/gm, '/')
        },
      },
      {
        type: 'input',
        name: 'tagName',
        message: 'Element tag:',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
        initial() {
          return camelize(this.state.answers.tagName, '-')
        },
      },
    ])
  },
}
