import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  Object.defineProperty(window.navigator, "clipboard", {
    value: {
      clipboardItem: undefined,
      readText(this: { clipboardItem: ClipboardItemDataType }) {
        if (typeof this.clipboardItem !== "string") return Promise.resolve("");
        return Promise.resolve(this.clipboardItem);
      },
      writeText(this: { clipboardItem: ClipboardItemDataType }, data: string) {
        this.clipboardItem = data;
        return Promise.resolve();
      },
    },
  });
});

test("copy clipboard", async () => {
  render(<App />);
  const button = screen.getByRole("button");
  userEvent.click(button);

  const copyText = await window.navigator.clipboard.readText();

  expect(copyText).toBe("hoge");
});
