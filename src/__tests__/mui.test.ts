import mui from '../../mui'

describe('测试', () => {
  it('mui color length', () => {
    expect(Object.keys(mui)).toHaveLength(19)
  })

  it('mui keys', () => {
    expect(Object.keys(mui)).toMatchInlineSnapshot(`
      [
        "red",
        "pink",
        "purple",
        "deepPurple",
        "indigo",
        "blue",
        "lightBlue",
        "cyan",
        "tail",
        "green",
        "lightGreen",
        "lime",
        "yellow",
        "amber",
        "orange",
        "deepOrange",
        "brown",
        "grey",
        "blueGrey",
      ]
    `)
  })
})
