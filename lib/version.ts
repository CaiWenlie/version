const fs = require('fs')
const path = require('path')

const defaultOptions = {
  getVersion: () => Date.now().toString(),
  root: './',
  dist: 'public/info.json'
}
type TSetVersionOptions = Partial<typeof defaultOptions>

function version(_options?: TSetVersionOptions) {
  const options = { ...defaultOptions, ..._options }
  const version = options.getVersion()
  const content = JSON.stringify({ version })
  fs.writeFileSync(path.resolve(options.root, options.dist), content)
  return JSON.stringify(version)
}

module.exports = version