# 颜色系统

- [english document](./README.md)

## 安装

```sh
npm install icolors-var
pnpm install icolors-var
yarn add icolors-var
```

## 设计动机

有时候，我们需要一个设计系统，用户快速完成工作。使用市面现有的颜色设计系统，熟悉快捷配色。

## 命名方法

- `--i` indicates the iColorsSystem design system problem
- `-antd` indicates the design system name
- `-red-100` indicates read and color scale

## 集成市面的颜色系统

- antd
- tailwind
- elm-plus
- material-ui

## 使用方法

- icolors-vars 在 React 项目主文件

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

## 将要做

- add other popular colors system
- adjust usage methods and make it easyer

## 注意

- 目前使用 dist 目录中引用，未来引用方式要移除 dist 文件，让引用更加简单合理
