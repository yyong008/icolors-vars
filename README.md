# Colors System

- [中文文档](./README-CN.md)
- [docs online](https://yyong008.github.io/icolors-vars/intro.html)

## Installation

```sh
npm install icolors-vars
pnpm install icolors-vars
yarn add icolors-vars
```

## Design motivation

Sometimes, we need a design system where users can get the job done quickly. Use the existing color design system on the market and get familiar with quick color matching.

## Naming

- `--i` indicates the iColorsSystem design system problem
- `-antd` indicates the design system name
- `-red-100` indicates read and color scale

## Integrated color system

- antd
- tailwind
- elm-plus
- material-ui

## Use in CSS

- icolors-vars in React main entry file

```jsx
import 'icolors-vars' // current is antd
import 'icolors-vars/antd.css' // antd.css
import 'icolors-vars/tailwind.css' // tailwind.css
import 'icolors-vars/mui.css' // mui.css
import 'icolors-vars/elm-plus.css' // elm-plus.css
```

```css
div {
  colors: var(--i-antd-red-100);
  background-color: var(--i-mui-red-A400);
}
```

## Use in javascript runtime

```ts
import colors from 'icolors-vars/index.js'
import antd from 'icolors-vars/antd.js'
import elmPlus from 'icolors-vars/elm-plus.js'
import mui from 'icolors-vars/mui.js'
import tailwind from 'icolors-vars/tailwind.js'

const c1 = colors.antd.100
const c2 = colors.elmPlus.100
const c3 = colors.mui.100
const c4 = colors.tailWind.100

const ac1 = antd.100
const ac2 = elmPlus.100
const ac3 = mui.100
const ac4 = tailwind.100
```

## color utils

```js
import { invertHexColor } form 'icolors-vars'

const writeInvertHexColor = invertHexColor('#000000')
```

## Note

At present, references in the dist directory are used, and in the future, the dist file will be removed to make the reference more simple and reasonable
