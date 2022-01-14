# @unreal/version

web版本检查，在版本构建时生成版本号，通过比对web和服务端的版本号，判断是否需要加载最新版本。**常用于灰度版本检测**

## Usage

1. 注入版本号
```js
const version = require('@unreal/version')

// vite
{
  define: {
    'process.env.version': version()
  }
}

// webpack
new webpack.DefinePlugin({
  'process.env.version': version()
});
```
执行`version()`会自动生成文件`/public/info.json`

2. 检测灰度版本
```js
import { check } from '@unreal/version'

// 根据你的需要 在合适的时候检测灰度版本
router.afterEach(() => {
  check(process.env.version)
})
```
检测时会发送请求，检查服务端的`info.json`，请求地址默认为`/info.json`，可以通过参数修改

## API

### check(version, options?)
  检测灰度版本
  | 参数 | 类型 | 是否必填 | 默认值 | 描述 |
  | --- | --- | --- | --- | --- |
  | version | string | 必填 |  | 版本号 |
  | options | | 可选 | | 选项 |
  | options.path | string | 可选 | '/info.json' | 请求地址 |
  | options.prodOnly | boolean | 可选 | true | 只在NODE_ENV=production时检测 |
  | options.callback | (latestVersion: string, currentVersion: string) => void | 可选 | | 检测回调，默认当版本不一致时刷新页面 |


### version(options?)
  生成版本号，并写入文件`/public/info.json`
  | 参数 | 类型 | 是否必填 | 默认值 | 描述 |
  | --- | --- | --- | --- | --- |
  | options |  | 可选 |  | 选项 |
  | options.getVersion | () => string | 可选 |  | 版本号生成函数，默认使用时间戳 |
  | options.root | string | 可选 | './' | 根目录 |
  | options.dist | string | 可选 | 'public/info.json' | 文件生成路径 |

