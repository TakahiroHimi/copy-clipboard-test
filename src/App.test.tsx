import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  Object.defineProperty(window.navigator, "clipboard", {
    value: {
      item: "",
      readText() {
        if (typeof this.item !== "string") return Promise.resolve("");
        return Promise.resolve(this.item);
      },
      writeText(text: string) {
        this.item = text;
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
