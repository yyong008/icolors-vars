const NODE_ENV = process.env.NODE_ENV

export const destDir = NODE_ENV === 'development' ? 'dist-dev' : ''
