# 颜色的工具函数

## 实现十六进制颜色反转

```ts
function invertHexColor(hex: string) {
  if (hex.length <= 5) {
    throw new Error('Invalid hex')
  }
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }

  let r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)

  r = Number((255 - r).toString(16))
  g = Number((255 - g).toString(16))
  b = Number((255 - b).toString(16))

  return '#' + padZero(r) + padZero(g) + padZero(b)
}

function padZero(str, len?): string {
  len = len || 2
  const zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

export default invertHexColor
```

特点是使用： 使用 RGB 颜色进行反转
