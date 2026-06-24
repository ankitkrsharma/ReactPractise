import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

const employees = [
  {
    id: 1,
    name: "Anu",
    team: "UI",
    status: "Going",
  },
  {
    id: 2,
    name: "Rahul",
    team: "Backend",
    status: "Pending",
  },
];

describe("Summary", () => {
  test("shows correct counts", () => {
    render(
      <Summary employees={employees} />
    );

    expect(
      screen.getByText("Total Employees: 2")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Going: 1")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pending: 1")
    ).toBeInTheDocument();
  });
});