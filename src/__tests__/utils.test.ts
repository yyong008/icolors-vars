import utils from '../../utils'

describe('测试', () => {
  it('utils type', () => {
    expect(utils).toMatchInlineSnapshot('[Function]')
  })

  it('colors test', () => {
    expect(utils('#ffffff')).toMatchInlineSnapshot('"#000000"')
  })

  it('colors test', () => {
    expect(utils('#ff0000')).toMatchInlineSnapshot('"#00ffff"')
  })
})
