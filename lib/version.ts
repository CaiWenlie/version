const fs = require('fs')
const path = require('path')

const defaultOptions = {
  getVersion: () => Date.now().toString(),
  root: './',
  dist: 'public/info.json'
}
type TSetVersionOptions = Partial<typeof defaultOptions>

function version(_options?: TSetVersionOptions) {
  // prevent excuting twice in some weird buildin
  let vnum = process.env.UNREAL_VERSION
  if (!vnum) {
    const options = { ...defaultOptions, ..._options }
    const version = options.getVersion()
    const content = JSON.stringify({ version })
    fs.writeFileSync(path.resolve(options.root, options.dist), content)
    vnum = JSON.stringify(version)
    process.env.UNREAL_VERSION = vnum
  }
  return vnum
}

module.exports = version