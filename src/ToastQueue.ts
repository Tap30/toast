import '@tapsioss/web-components/dist/toast';
import '@tapsioss/web-components/dist/styles/theme.css';
import { ToastOptions } from './types';

class ToastQueue {
  private queue: {
    message: string;
    options: ToastOptions;
  }[];
  private readonly maxConcurrentToasts: number;
  private activeToasts: number;

  constructor(maxConcurrentToasts = 1) {
    this.queue = [];
    this.maxConcurrentToasts = maxConcurrentToasts;
    this.activeToasts = 0;
  }

  public enqueue(message: string, options: ToastOptions = {}) {
    this.queue.push({ message, options });
    this.processQueue();
  }

  private getToastContainer(): HTMLElement {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      const body = document.getElementsByTagName('body')[0];
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.padding = '20px';
      toastContainer.style.position = 'absolute';
      toastContainer.style.top = '0';
      toastContainer.style.left = '0';
      toastContainer.style.right = '0';
      toastContainer.style.display = 'flex';
      toastContainer.style.justifyContent = 'center';
      toastContainer.style.flexDirection = 'column';
      toastContainer.style.alignItems = 'center';
      toastContainer.style.gap = '20px';
      toastContainer.style.zIndex = '999999';
      body.appendChild(toastContainer);
    }
    return toastContainer;
  }

  private processQueue() {
    if (
      this.queue.length === 0 ||
      this.activeToasts >= this.maxConcurrentToasts
    ) {
      return;
    }

    const item = this.queue.shift();
    if (!item) return;

    const { message, options } = item;
    const { variant, showDismissButton, timeout } = options;

    this.activeToasts++;

    const toast = document.createElement('tap-toast');

    toast.addEventListener('dismiss', () => {
      this.handleDismiss(toast);
    });

    if (variant) toast.setAttribute('variant', variant);
    if (showDismissButton) toast.setAttribute('show-dismiss-button', 'true');
    toast.innerHTML = message;

    const toastContainer = this.getToastContainer();
    toastContainer.appendChild(toast);

    setTimeout(() => {
      this.handleDismiss(toast);
    }, timeout || 3000);
  }

  private handleDismiss(toast: HTMLElement) {
    toast.remove();
    this.activeToasts--;
    this.processQueue();
  }
}

export const toastQueue = new ToastQueue(3);
