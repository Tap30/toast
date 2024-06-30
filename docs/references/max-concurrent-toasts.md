---
outline: 'deep'
---

# Max Concurrent Toasts

By default, you can import the `toastQueue` from `'@tapsioss/toast'`

```typescript
import { toastQueue } from '@tapsioss/toast';
```

After enqueueing the toasts with this approach, users can see 3 (the default value) toasts concurrently. 

```typescript
toastQueue.enqueue('1'); // visible
toastQueue.enqueue('2'); // visible
toastQueue.enqueue('3'); // visible
toastQueue.enqueue('4'); // will be visible after dismissing the first toast that was enqueued before!
```

If you need to
change this behaviour, you can use create the `toastQueue` variable manually from the `ToastQueue` class. The constructor 
of this class can get the `maxConcurrentToasts` parameter:

```typescript
import ToastQueue from '@tapsioss/toast';

const toastQueue = new ToastQueue(5);

toastQueue.enqueue('1'); // visible
toastQueue.enqueue('2'); // visible
toastQueue.enqueue('3'); // visible
toastQueue.enqueue('4'); // visible
toastQueue.enqueue('5'); // visible
toastQueue.enqueue('6'); // will be visible after dismissing the first toast that was enqueued before!
```

With this approach, 10 toasts can be visible on the screen concurrently.


