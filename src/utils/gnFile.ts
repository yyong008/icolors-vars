import fse from 'fs-extra'

export function gnCssRootVars(content) {
  return `
:root {
  ${content}
}
`
}

/**
 * 生成 css 变量属性
 */
export function gnCssVarAttrs(prefix, colors, colorKey, level, idx): string {
  return `${prefix}${colorKey}-${level}: ${colors[colorKey][idx]};`
}

function gnFile(targetPath, content) {
  fse.ensureFileSync(targetPath)
  fse.writeFileSync(targetPath, content)
}

export default gnFile
