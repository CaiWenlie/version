import { ajax } from "@unreal/utils"

const defaultOptions = {
  path: '/info.json',
  callback: (latestVersion: string, currentVersion: string) => {
    if (latestVersion !== currentVersion) {
      window.location.reload()
    }
    console.log('version:', new Date(Number(latestVersion)))
  },
  prodOnly: true
}
type TCheckOptions = Partial<typeof defaultOptions>

export default function check(version: string, _options?: TCheckOptions) {
  const options = { ...defaultOptions, ..._options }
  if (!options.prodOnly || process.env['NODE_ENV'] === 'production') {
    ajax('get', options.path, (info) => {
      options.callback(info.version, version)
    })
  }
}
