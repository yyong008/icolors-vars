import antd from '../../antd'

describe('测试', () => {
  it('antd color length', () => {
    expect(Object.keys(antd)).toHaveLength(13)
  })
  it('antd blue', () => {
    expect(antd.blue).toMatchInlineSnapshot(`
      {
        "100": "#e6f7ff",
        "1000": "#002766",
        "200": "#bae7ff",
        "300": "#91d5ff",
        "400": "#69c0ff",
        "500": "#40a9ff",
        "600": "#1890ff",
        "700": "#096dd9",
        "800": "#0050b3",
        "900": "#003a8c",
      }
    `)
  })
  it('key', () => {
    expect(Object.keys(antd)).toMatchInlineSnapshot(`
      [
        "blue",
        "geekBlue",
        "cyan",
        "gold",
        "gray",
        "green",
        "lime",
        "magenta",
        "orange",
        "purple",
        "red",
        "volcano",
        "yellow",
      ]
    `)
  })
})
