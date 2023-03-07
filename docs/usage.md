# Colors System

## Installation

```sh
npm install icolors-var
pnpm install icolors-var
yarn add icolors-var
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
import colors from './colors.js'
import { colors as antdColors } from './antd.colors.js'
import { colors as elmPlusColors } from './elm-plus.colors.js'
import { colors as muiColors } from './mui.colors.js'
import { colors as tailwindColors } from './tailwind.colors.js'

const c1 = colors.antd.blueColors100
const c2 = colors.elmPlus.baseColors100
const c3 = colors.mui.amberColors100
const c4 = colors.tailWind.amberColors100

const ac1 = antdColors.blueColors100
const ac2 = elmPlusColors.baseColors100
const ac3 = muiColors.amberColors100
const ac4 = tailwindColors.amberColors100
```

## Note

At present, references in the dist directory are used, and in the future, the dist file will be removed to make the reference more simple and reasonable
