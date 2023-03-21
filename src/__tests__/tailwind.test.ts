import tailwind from '../../tailwind'

describe('测试', () => {
  it('tailwind color length', () => {
    expect(Object.keys(tailwind)).toHaveLength(22)
  })

  it('tailwind keys', () => {
    expect(Object.keys(tailwind)).toMatchInlineSnapshot(`
      [
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emeraId",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ]
    `)
  })
})
