function invertHexColor(hex: string) {
  if (hex.length <= 5) {
    throw new Error('Invalid hex')
  }
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }

  let r = hex.slice(0, 2),
    g = hex.slice(2, 4),
    b = hex.slice(4, 6)

  r = (255 - parseInt(r, 16)).toString(16)
  g = (255 - parseInt(g, 16)).toString(16)
  b = (255 - parseInt(b, 16)).toString(16)

  return '#' + padZero(r) + padZero(g) + padZero(b)
}

function padZero(str, len?): string {
  len = len || 2
  const zeros = new Array(len).join('0')
  return (zeros + str.toString()).slice(-len)
}

export default invertHexColor
