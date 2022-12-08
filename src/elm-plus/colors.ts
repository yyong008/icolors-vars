export const systemColors = {
  brandColor: {
    brandColor1000: '#409EFF'
  },
  secondaryColor: {
    secondaryColor100: '#67C23A', // Success
    secondaryColor200: '#E6A23C',
    secondaryColor300: '#F56C6C',
    secondaryColor400: '#909399'
  },
  textColors: {
    textColors100: '#E5EAF3',
    textColors200: '#CFD3DC',
    textColors300: '#A3A6AD',
    textColors400: '#8D9095',
    textColors500: '#6C6E72'
  },
  borderColors: {
    borderColors100: '#636466',
    borderColors200: '#58585B',
    borderColors300: '#4C4D4F',
    borderColors400: '#414243',
    borderColors500: '#363637',
    borderColors600: '#2B2B2C'
  },
  fillColors: {
    fillColors100: '#424243',
    fillColors200: '#39393A',
    fillColors300: '#303030',
    fillColors400: '#262727',
    fillColors500: '#1D1D1D',
    fillColors600: '#191919'
  },
  baseColors: {
    baseColors100: '#000000',
    baseColors200: '#FFFFFF',
    baseColors300: '#0A0A0A',
    baseColors400: '#141414',
    baseColors500: '#1D1E1F'
  }
}

export const colors = {
  ...systemColors.brandColor,
  ...systemColors.borderColors,
  ...systemColors.baseColors,
  ...systemColors.fillColors,
  ...systemColors.secondaryColor,
  ...systemColors.textColors
}
