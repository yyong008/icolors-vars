export const blue = [
  '#e6f7ff',
  '#bae7ff',
  '#91d5ff',
  '#69c0ff',
  '#40a9ff',
  '#1890ff',
  '#096dd9',
  '#0050b3',
  '#003a8c',
  '#002766'
]

export const geekBlue = [
  '#f0f5ff',
  '#d6e4ff',
  '#adc6ff',
  '#85a5ff',
  '#597ef7',
  '#2f54eb',
  '#1d39c4',
  '#10239e',
  '#061178',
  '#030852'
]

export const cyan = [
  '#e6fffb',
  '#b5f5ec',
  '#87e8de',
  '#5cdbd3',
  '#36cfc9',
  '#13c2c2',
  '#08979c',
  '#006d75',
  '#00474f',
  '#002329'
]

export const gold = [
  '#fffbe6',
  '#fff1b8',
  '#ffe58f',
  '#ffd666',
  '#ffc53d',
  '#faad14',
  '#d48806',
  '#ad6800',
  '#874d00',
  '#613400'
]

export const gray = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000000'
]

export const green = [
  '#f6ffed',
  '#d9f7be',
  '#b7eb8f',
  '#95de64',
  '#73d13d',
  '#52c41a',
  '#389e0d',
  '#237804',
  '#135200',
  '#092b00'
]

export const lime = [
  '#fcffe6',
  '#f4ffb8',
  '#eaff8f',
  '#d3f261',
  '#bae637',
  '#a0d911',
  '#7cb305',
  '#5b8c00',
  '#3f6600',
  '#254000'
]

export const magenta = [
  '#fff0f6',
  '#ffd6e7',
  '#ffadd2',
  '#ff85c0',
  '#f759ab',
  '#eb2f96',
  '#c41d7f',
  '#9e1068',
  '#780650',
  '#520339'
]

export const orange = [
  '#fff7e6',
  '#ffe7ba',
  '#ffd591',
  '#ffc069',
  '#ffa940',
  '#fa8c16',
  '#d46b08',
  '#ad4e00',
  '#873800',
  '#612500'
]

export const purple = [
  '#f9f0ff',
  '#efdbff',
  '#d3adf7',
  '#b37feb',
  '#9254de',
  '#722ed1',
  '#531dab',
  '#391085',
  '#22075e',
  '#120338'
]

export const red = [
  '#fff1f0',
  '#ffccc7',
  '#ffa39e',
  '#ff7875',
  '#ff4d4f',
  '#f5222d',
  '#cf1322',
  '#a8071a',
  '#820014',
  '#5c0011'
]

export const volcano = [
  '#fff2e8',
  '#ffd8bf',
  '#ffbb96',
  '#ff9c6e',
  '#ff7a45',
  '#fa541c',
  '#d4380d',
  '#ad2102',
  '#871400',
  '#610b00'
]

export const yellow = [
  '#feffe6',
  '#ffffb8',
  '#fffb8f',
  '#fff566',
  '#ffec3d',
  '#fadb14',
  '#d4b106',
  '#ad8b00',
  '#876800',
  '#614700'
]

const mmap = {
  idx0: '100',
  idx1: '200',
  idx2: '300',
  idx3: '400',
  idx4: '500',
  idx5: '600',
  idx6: '700',
  idx7: '800',
  idx8: '900',
  idx9: '1000',
  idx10: '1100',
  idx11: '1200',
  idx12: '1300'
}

/**
 * by mmap and color index, get color level hex
 * @param idx colors index color array
 * @returns { number } color hex
 */
export const getLevelByIdx = (idx) => {
  return mmap[`idx${idx}`]
}

const colors = {
  blue,
  geekBlue,
  cyan,
  gold,
  gray,
  green,
  lime,
  magenta,
  orange,
  purple,
  red,
  volcano,
  yellow
}

export default colors
