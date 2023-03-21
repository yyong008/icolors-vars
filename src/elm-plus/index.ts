import path from 'node:path'

import defineVars from 'iesmo'

// colors
import colors from './colors'

// constant
import { ELM_PLUS_PREFIX } from '../utils/constants'
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
      if (colors[ck][idx].length > 6) {
        cssVarsStrs += gnCssVarAttrs(
          ELM_PLUS_PREFIX,
          colors,
          ck,
          getLevelByIdx(idx),
          idx
        )
      }
    })
  })

  return formatCss(gnCssRootVars(cssVarsStrs))
}

export default function createElmPlusCssFile() {
  const content = gnCSSContent()
  const targetPath = path.join(__dirname + `/../../${destDir}/elm-plus.css`)
  gnFile(targetPath, content)
}

export function createElmPlusColorRuntime() {
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
