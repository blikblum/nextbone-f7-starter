const rollupBabel = require('@rollup/plugin-babel');
const { fromRollup } = require('@web/dev-server-rollup');

const babel = fromRollup(rollupBabel.default);

module.exports = {
  nodeResolve: {
    customResolveOptions: { moduleDirectory: [__dirname + '/src/common', 'node_modules'] },
  },
  plugins: [babel({ include: ['src/**/*.js'], babelHelpers: 'inline' })],
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <script type="module">
           import './../../src/setup/firebase.js';
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`
}
