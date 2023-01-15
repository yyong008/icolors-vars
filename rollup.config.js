import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default defineConfig([
  {
    input: './src/main.colors.ts',
    output: {
      dir: '.',
      format: 'es',
      entryFileNames: 'colors.js'
    },
    plugins: [ts({}), terser(), resolve(), commonjs()]
  },
  {
    input: './src/antd/colors.ts',
    output: {
      dir: '.',
      format: 'es',
      entryFileNames: 'antd.colors.js'
    },
    plugins: [ts({}), terser(), resolve(), commonjs()]
  },
  {
    input: './src/elm-plus/colors.ts',
    output: {
      dir: '.',
      format: 'es',
      entryFileNames: 'elm-plus.colors.js'
    },
    plugins: [ts({}), terser(), resolve(), commonjs()]
  },
  {
    input: './src/material-ui/colors.ts',
    output: {
      dir: '.',
      format: 'es',
      entryFileNames: 'mui.colors.js'
    },
    plugins: [ts({}), terser(), resolve(), commonjs()]
  },
  {
    input: './src/tailwind/colors.ts',
    output: {
      dir: '.',
      format: 'es',
      entryFileNames: 'tailwind.colors.js'
    },
    plugins: [ts({}), terser(), resolve(), commonjs()]
  }
])
