const brand = [...new Array(9).fill(''), '#409EFF']
const secondary = [
  '#67C23A',
  '#E6A23C',
  '#F56C6C',
  '#909399',
  ...new Array(6).fill('')
]
const text = [
  '#E5EAF3',
  '#CFD3DC',
  '#A3A6AD',
  '#8D9095',
  '#6C6E72',
  ...new Array(5).fill('')
]
const border = [
  '#636466',
  '#58585B',
  '#4C4D4F',
  '#414243',
  '#363637',
  '#2B2B2C',
  ...new Array(5).fill('')
]
const fill = [
  '#424243',
  '#39393A',
  '#303030',
  '#262727',
  '#1D1D1D',
  '#191919',
  ...new Array(4).fill('')
]

const base = [
  '#000000',
  '#FFFFFF',
  '#0A0A0A',
  '#141414',
  '#1D1E1F',
  ...new Array(5).fill('')
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
  idx9: '1000'
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
  brand,
  secondary,
  text,
  border,
  fill,
  base
}

export default colors
