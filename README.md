# Colors System

- [中文文档](./README-CN.md)

## Installation

```sh
npm install icolors-var
pnpm install icolors-var
yarn add icolors-var
```

## Design motivation

有时候，我们需要一个设计系统，用户快速完成工作。使用市面现有的颜色设计系统，熟悉快捷配色。

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

## Use

- icolors-vars in React main entry file

```jsx
import 'icolors-vars' // current is antd
import 'icolors-vars/dist/antd.css' // antd.css
import 'icolors-vars/dist/tailwind.css' // tailwind.css
import 'icolors-vars/dist/mui.css' // mui.css
import 'icolors-vars/dist/elm-plus.css' // elm-plus.css
```

```css
div {
  colors: var(--i-antd-red-100);
  background-color: var(--i-mui-red-A400);
}
```

## TODO

- add other popular colors system
- adjust usage methods and make it easyer

## Note

At present, references in the dist directory are used, and in the future, the dist file will be removed to make the reference more simple and reasonable
