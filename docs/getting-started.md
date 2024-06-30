---
outline: 'deep'
---

# Getting Started

## Installation

[//]: # (### Web)

Implementation of the ToastQueue library for web applications.

::: code-group
```bash [npm]
npm install @tapsioss/toast
```

```bash [yarn]
yarn add @tapsioss/toast
```

```bash [pnpm]
pnpm install @tapsioss/toast
```
:::

::: info
Please note that [lit](https://www.npmjs.com/package/lit) is a peer dependency, meaning you should ensure it is installed before installing ToastQueue.
:::

## Usage

### Importing

First, ensure you import the `toastQueue` in your code:

```typescript
import toastQueue from '@tapsioss/toast';
```

### Enqueuing Toasts

Use the `enqueue` method to add new toast messages to the queue:

```typescript
toastQueue.enqueue('Hello, World!');
```

## Properties

Many components have properties that can be set using attributes. For example, the `tap-toast` component accepts a `variant` attribute that dictates the style of the toast.

```html
<tap-toast variant="success">This is a success message</tap-toast>
```

Some properties are boolean, so they only have true/false values. To activate a boolean property, add the corresponding attribute without a value.

```html
<tap-toast show-dismiss-button>This toast can be dismissed</tap-toast>
```

In rare cases, a property may require an array, an object, or a function. This can be done with JavaScript.

## Stylings

This library uses the [`tap-toast`](https://tap30.github.io/web-components/components/tap-toast.html) components from 
[`@tapsioss/web-components` library](https://tap30.github.io/web-components). Components in this library have the `part` 
attribute. This attribute allows users to modify the styles of a component from outside using the 
[`::part` CSS pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). All you need to do is to visit 
the [CSS part documentation](https://tap30.github.io/web-components/references/css-parts.html#tap-toast) of `tap-toast` 
component and modify the style of the component.

Here is an example of modifying the style toasts using `part`:

```css
/* Changing the style of all toasts */
 tap-toast::part(toast) {
  border-radius: 4px;
}

/* Overriding the style of "success" toast */
tap-toast[variant='success']::part(toast) {
  color: rgb(204, 232, 205);
  border: 1px solid rgb(204, 232, 205);
  background: rgb(12, 19, 13);
}
```
