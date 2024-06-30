import { html, TemplateResult } from "lit";
import "@tapsioss/web-components/dist/button";
import toastQueue from "./index";
import {ToastOptions} from "./types";


export default {
  title: "Toast",
  component: "tap-toast",
  argTypes: {
    message: {
      control: "text",
      description: "Toast Message",
    },
    variant: {
      options: ["success", "error", "info", "inverse", "warning"],
      control: { type: "inline-radio" },
      description: "The toast variant",
      defaultValue: `"inverse"`,
    },
    showDismissButton: {
      description: "Should the Dismiss button be visible?",
      control: { type: "boolean" },
      defaultValue: true,
    },
    timout: {
      control: { type: "number" },
      description:
        "The duration of hiding the toast automatically (in milliseconds). ",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const defaultProps = {
  message: "متن اسنک‌بار اینجا قرار می‌گیرد.",
  variant: "inverse",
  showDismissButton: false,
  timout: 1000,
};

const ClickTemplate: Story<{message: string} & ToastOptions> = ({
  variant,
  message,
  showDismissButton,
  timout,
}) => {
  return html`
    <p>
      You can define your toast from <b>Controls</b> section and click on
      <b>Show Snackbar</b> button to see it. After clicking on this button, the
      <code>enqueueToast</code> function will be called like bellow:
    </p>
    <pre>
toastQueue.enqueue("${message}", {
  variant,
  showDismissButton,
  timout,
});
    </pre
    >
    <tap-button
      @click=${() =>
        toastQueue.enqueue(message, {
          variant,
          showDismissButton,
          timout
        })}
    >
      Show Snackbar
    </tap-button>
  `;
};

export const ShowSnackbarOnClick = ClickTemplate.bind({});
ShowSnackbarOnClick.args = {
  ...defaultProps,
};
