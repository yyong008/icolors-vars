import path from 'node:path'

import defineVars from 'iesmo'

// colors
import colors from './colors'

// constant
import { MUI_PREFIX } from '../utils/constants'
import { destDir } from '../utils/env'

// utils
import formatCss from '../utils/format'
import gnFile, { gnCssRootVars, gnCssVarAttrs } from '../utils/gnFile'
import { getLevelByIdx } from './colors'

const { __dirname } = defineVars(import.meta)

/**
 * 生成 css 内容
 */
function gnCSSContent() {
  const colorsKind = Object.keys(colors) // [blue, green, yellow, /*...*/]
  let cssVarsStrs = ''

  colorsKind.forEach((ck) => {
    const cKeys = colors[ck]

    cKeys.forEach((_, idx) => {
      cssVarsStrs += gnCssVarAttrs(
        MUI_PREFIX,
        colors,
        ck,
        getLevelByIdx(idx),
        idx
      )
    })
  })

  // format and return
  return formatCss(gnCssRootVars(cssVarsStrs))
}

export default function createMuiCssFile() {
  const content = gnCSSContent()
  const targetPath = path.join(__dirname + `/../../${destDir}/mui.css`)

  gnFile(targetPath, content)
}

export function createMuiColorRuntime() {
  const _colors = {}
  const colorsKind = Object.keys(colors)

  colorsKind.forEach((ck) => {
    const cKeys = colors[ck]
    _colors[ck] = {}

    cKeys.forEach((_, idx) => {
      if (colors[ck][idx].length > 6) {
        _colors[ck][getLevelByIdx(idx)] = colors[ck][idx]
      }
    })
  })

  return _colors
}
