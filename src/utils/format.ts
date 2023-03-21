import prettier from 'prettier'

const formatCss = (content) => prettier.format(content, { parser: 'css' })
const formatjs = (content) =>
  prettier.format(content, {
    trailingComma: 'none',
    parser: 'babel',
    singleQuote: true,
    semi: false
  })

export default formatCss
export { formatjs }
