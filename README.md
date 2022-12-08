# 颜色系统

## 设计动机

有时候，我们需要一个设计系统，用户快速完成工作。使用市面现有的颜色设计系统，熟悉快捷配色。

## 命名

- `--i` 表示 iColorSystem 设计系统真题
- `-antd` 表示设计系统名称
- `-red-100` 表示红色以及色阶

## 集成颜色系统

- antd
- tailwind

## 使用方法

- iColorsSystem/antd

```jsx
import 'iColorsSystem/antd'
```

```css
div {
  colors: var(--i-antd-red-100);
}
```
