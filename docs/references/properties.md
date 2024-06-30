---
outline: 'deep'
---

# Properties

After calling the `enqueue` method, a [`tap-toast`](https://tap30.github.io/web-components/components/tap-toast.html) component will be added to the DOM. This method has two parameters:
- [`message`](#message)
- [`options`](#options)

In this page we will learn how to customize the added toast to the DOM.

## `message`

- **Type**: `string` (**required**)
- **Description**: The message to be displayed inside the toast.
- **Usage**:

```typescript
toastQueue.enqueue("This is a toast message")
```

After calling this method, the following element will be added to the DOM:

```html
<tap-toast>This is a toast message</tap-toast>
```

## `options`

This parameter is an optional object with following properties: 

### `variant`

- **Type**: `'success'` | `'error'` | `'info'` | `'inverse'` | `'warning'`
- **Description**: The variant of the toast, which dictates the style of the toast.
- **Usage**: Set the `variant` attribute to one of the possible values.

```typescript
toastQueue.enqueue('This is a success message', { variant: 'success' });
toastQueue.enqueue('This is an error message', { variant: 'error' });
toastQueue.enqueue('This is an info message', { variant: 'info' });
toastQueue.enqueue('This is a warning message', { variant: 'warning' });
```

After calling these methods, the following elements will be added to the DOM:

```html
<tap-toast variant="success">This is a success message</tap-toast>
<tap-toast variant="error">This is an error message</tap-toast>
<tap-toast variant="info">This is an info message</tap-toast>
<tap-toast variant="warning">This is a warning message</tap-toast>
```

### `timeout`

- **Type**: `number`
- **Description**: The duration in milliseconds the toast should be displayed before automatically dismissing. Default value: `3000`
- **Usage**: Pass the `timeout` value in the options object when calling the `enqueue` method.

```typescript
toastQueue.enqueue('This is a toast message', { timeout: 5000 });
```

### `showDismissButton`

- **Type**: `boolean`
- **Description**: Whether to show the dismiss button on the toast.
- **Usage**: Set the `show-dismiss-button` attribute to display the dismiss button.

```typescript
toastQueue.enqueue('This toast can be dismissed', { 
  showDismissButton: true 
});
```

After calling this method, the following element will be added to the DOM:

```html
<tap-toast show-dismiss-button>This toast can be dismissed</tap-toast>
```
