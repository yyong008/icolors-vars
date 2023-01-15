import fse from 'fs-extra'
import { systemColors } from './colors'
import prettier from 'prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const colors = Object.keys(systemColors)
const prefix = '--i-elm-plus-'
const cssVariables: any[] = []

colors.forEach((c) => {
  const cKeys = Object.keys((systemColors as any)[c])

  cKeys.forEach((cc) => {
    const _key = `${cc.split('Colors').join('-')}`

    cssVariables.push(`${prefix}${_key}: ${systemColors[c][cc]};`)
  })
})

const _content = cssVariables.reduce((p, cv) => {
  return `${p};${cv}`
}, '')

const __content = `
:root {
  ${_content}
}
`

const content = prettier.format(__content, { parser: 'css' })
const p = path.join(__dirname + '/../../libs/elm-plus.css')

fse.ensureFileSync(p)
fse.writeFileSync(p, content)
