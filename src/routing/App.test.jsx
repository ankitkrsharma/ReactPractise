import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Integration", () => {
    test("clicking Going updates status", async () => {
      render(<App />);

      const goingButtons = screen.getAllByRole("button", {
        name: "Going",
      });

      
      await userEvent.click(goingButtons[1]);

      expect(
        screen.getByText(/^Going:\s*1$/)
      ).toBeInTheDocument();

      expect(
        screen.getByText(/^Pending:\s*3$/)
      ).toBeInTheDocument();
    });

  test("clicking Not Going updates status", async () => {
    render(<App />);

    const notGoingButtons = screen.getAllByRole("button", {
      name: "Not Going",
    });

    // Skip filter button (index 0)
    await userEvent.click(notGoingButtons[1]);

    expect(
      screen.getByText(/^Not Going:\s*1$/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/^Pending:\s*3$/)
    ).toBeInTheDocument();
  });

  test("reset button resets all statuses", async () => {
    render(<App />);

    const goingButtons = screen.getAllByRole("button", {
      name: "Going",
    });

    await userEvent.click(goingButtons[1]);

    await userEvent.click(
      screen.getByRole("button", {
        name: /reset all/i,
      })
    );

    expect(
      screen.getByText(/^Going:\s*0$/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/^Not Going:\s*0$/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/^Pending:\s*4$/)
    ).toBeInTheDocument();
  });

  test("filter Going shows only Going employees", async () => {
    render(<App />);

    const goingButtons = screen.getAllByRole("button", {
      name: "Going",
    });

    // Employee button
    await userEvent.click(goingButtons[1]);

    // Filter button
    await userEvent.click(goingButtons[0]);

    expect(
      screen.getByText("Anu")
    ).toBeInTheDocument();
  });

  test("summary updates correctly", async () => {
    render(<App />);

    const goingButtons = screen.getAllByRole("button", {
      name: "Going",
    });

    await userEvent.click(goingButtons[1]);

    expect(
      screen.getByText(/^Going:\s*1$/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/^Pending:\s*3$/)
    ).toBeInTheDocument();
  });
});