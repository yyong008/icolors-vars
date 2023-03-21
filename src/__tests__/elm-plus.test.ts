import elmPlus from '../../elm-plus'

describe('测试', () => {
  it('elm plus color length', () => {
    expect(Object.keys(elmPlus)).toHaveLength(6)
  })

  it('elm plus keys', () => {
    expect(Object.keys(elmPlus)).toMatchInlineSnapshot(`
      [
        "brand",
        "secondary",
        "text",
        "border",
        "fill",
        "base",
      ]
    `)
  })
})
