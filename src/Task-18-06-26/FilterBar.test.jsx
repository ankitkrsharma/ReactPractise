import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterBar from "./FilterBar";

describe("FilterBar", () => {
  test("calls setFilter when button clicked", async () => {
    const setFilter = vi.fn();

    render(
      <FilterBar
        filter="All"
        setFilter={setFilter}
      />
    );

    await userEvent.click(
      screen.getByText("Going")
    );

    expect(setFilter).toHaveBeenCalledWith(
      "Going"
    );
  });
});
