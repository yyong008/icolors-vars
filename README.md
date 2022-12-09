# Colors System

## Installation

```sh
npm install i-colors-var
pnpm install i-colors-var
yarn add i-colors-var
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

## Use

- iColorsSystem/antd

```jsx
import 'iColorsSystem/antd'
```

```css
div {
  colors: var(--i-antd-red-100);
}
```
