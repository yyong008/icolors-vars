# 颜色系统

- [en docs](./README.md)

## 安装

```sh
npm install icolors-vars
pnpm install icolors-vars
yarn add icolors-vars
```

## 设计动机

有时，我们需要一个设计系统，用户可以快速完成工作。使用市场上现有的颜色设计系统，并熟悉快速颜色匹配。

## Naming

## 命名

- `--i` 表示 iColorsSystem 设计系统问题
- `-antd` 表示设计系统名称
- `-red-100` 表示红色和颜色比例尺

## Integrated color system

## 集成颜色系统

- antd
- tailwind
- elm-plus
- material-ui

## 在 CSS 中使用

- 在 React 主入口文件中使用 icolors-vars

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

## 在 javascript 运行时使用

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

## 颜色工具

- 十六禁止颜色反转

```js
import { invertHexColor } form 'icolors-vars'

const writeInvertHexColor = invertHexColor('#000000')
```

## 注意

目前使用 dist 目录中的引用，未来将删除 dist 文件，使引用更简单合理
