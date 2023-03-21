import path from 'node:path'
import defineVars from 'iesmo'

// utils
import gnFile from './utils/gnFile'
import { formatjs } from './utils/format'
import { destDir } from './utils/env'

// create files
import createAntdCssFile, { createAntdColorRuntime } from './antd'
import createElmPlusCssFile, { createElmPlusColorRuntime } from './elm-plus'
import createMuiCssFile, { createMuiColorRuntime } from './material-ui'
import createTailWindCssFile, { createTailwindColorRuntime } from './tailwind'

const { __dirname } = defineVars(import.meta)

function createJsFiles() {
  const antd = createAntdColorRuntime()
  const elmPlus = createElmPlusColorRuntime()
  const mui = createMuiColorRuntime()
  const tailWind = createTailwindColorRuntime()

  const colors = {
    antd,
    elmPlus,
    mui,
    tailWind
  }

  createColorJsFiles(antd, 'antd')
  createColorJsFiles(elmPlus, 'elm-plus')
  createColorJsFiles(mui, 'mui')
  createColorJsFiles(tailWind, 'tailwind')

  const content = formatjs('export default' + JSON.stringify(colors))
  const targetPath = path.join(__dirname + `/../${destDir}/index.js`)
  gnFile(targetPath, content)
}

function createColorJsFiles(content, filename) {
  const _content = formatjs('export default' + JSON.stringify(content))
  const targetPath = path.join(__dirname + `/../${destDir}/${filename}.js`)
  gnFile(targetPath, _content)
}

function run() {
  createAntdCssFile()
  createElmPlusCssFile()
  createMuiCssFile()
  createTailWindCssFile()
  // js
  createJsFiles()
}

run()
