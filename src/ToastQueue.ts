import '@tapsioss/web-components/dist/toast';
import '@tapsioss/web-components/dist/styles/theme.css';
import { ToastOptions } from './types';

export default class ToastQueue {
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

  /**
   * Adds a new toast message to the queue.
   *
   * @param {string} message - The message to be displayed in the toast.
   * @param {ToastOptions} [options] - Optional settings for the toast.
   * @param {string} [options.variant] - The variant of the toast, can be 'success', 'error', 'info', 'warning', or 'inverse'.
   * @param {boolean} [options.showDismissButton] - Whether to show the dismiss button on the toast.
   * @param {number} [options.timeout] - The duration in milliseconds the toast should be displayed before automatically dismissing.
   */
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
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
    this.activeToasts--;
    this.processQueue();
  }
}

export const toastQueue = new ToastQueue(3);
