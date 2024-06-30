import { html, TemplateResult } from 'lit';
import '@tapsioss/web-components/dist/button';
import '@tapsioss/web-components/dist/styles/theme.css';
import toastQueue from './index';
import { ToastOptions } from './types';

export default {
  title: 'Toast Queue',
  component: 'tap-toast',
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast Message',
    },
    variant: {
      options: ['success', 'error', 'info', 'inverse', 'warning'],
      control: { type: 'inline-radio' },
      description: 'The toast variant',
      defaultValue: `'inverse'`,
    },
    showDismissButton: {
      description: 'Should the Dismiss button be visible?',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    timout: {
      control: { type: 'number' },
      description:
        'The duration of hiding the toast automatically (in milliseconds). ',
    },
  },
};

type Args = { message: string } & ToastOptions;

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const defaultProps = {
  message: 'متن اسنک‌بار اینجا قرار می‌گیرد.',
  variant: 'inverse',
  showDismissButton: false,
  timout: 3000,
};

const renderStoryBase = ({
  variant,
  message,
  showDismissButton,
  timeout,
}: Args) => html`
  <p>
    You can define your toast from <b>Controls</b> section and click on
    <b>Show Snackbar</b> button to see it. After clicking on this button, the
    <code>enqueueToast</code> function will be called like bellow:
  </p>
  <pre>
toastQueue.enqueue("${message}", {
  variant,
  showDismissButton,
  timeout,
});
    </pre
  >
  <tap-button
    variant="brand"
    @click=${() =>
      toastQueue.enqueue(message)}
  >
    Show Snackbar
  </tap-button>
`;

const Template: Story<Args> = ({
  variant,
  message,
  showDismissButton,
  timeout,
}) => {
  return renderStoryBase({
    variant,
    message,
    showDismissButton,
    timeout,
  });
};
export const ShowSnackbarOnClick = Template.bind({});
ShowSnackbarOnClick.args = {
  ...defaultProps,
};

const StyledTemplate: Story<Args> = ({
  variant,
  message,
  showDismissButton,
  timeout,
}) => {
  return html`
    <style>
      .sb-show-main {
        background: #161618 !important;
        color: #ffffff;
      }
      tap-toast::part(toast) {
        border-radius: 4px;
      }

      tap-toast[variant='success']::part(toast) {
        color: rgb(204, 232, 205);
        border: 1px solid rgb(204, 232, 205);
        background: rgb(12, 19, 13);
      }
      tap-toast[variant='inverse']::part(toast) {
        color: rgb(205, 205, 205);
        border: 1px solid rgb(205, 205, 205);
        background: rgb(13, 13, 13);
      }
      tap-toast[variant='warning']::part(toast) {
        color: rgb(255, 226, 183);
        border: 1px solid rgb(255, 226, 183);
        background: rgb(25, 18, 7);
      }
      tap-toast[variant='info']::part(toast) {
        color: rgb(184, 231, 251);
        border: 1px solid rgb(184, 231, 251);
        background: rgb(7, 19, 24);
      }
      tap-toast[variant='error']::part(toast) {
        color: rgb(244, 199, 199);
        border: 1px solid rgb(244, 199, 199);
        background: rgb(22, 11, 11);
      }
    </style>
    ${renderStoryBase({
      variant,
      message,
      showDismissButton,
      timeout,
    })}
  `;
};
export const CustomStyle = StyledTemplate.bind({});
CustomStyle.args = {
  ...defaultProps,
};
