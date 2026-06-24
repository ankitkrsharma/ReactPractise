import { render, screen } from "@testing-library/react";
import EmployeeList from "./EmployeeList";

const employees = [
  {
    id: 1,
    name: "Anu",
    team: "UI",
    status: "Pending",
  },
];

describe("EmployeeList", () => {
  test("employee details", () => {
    render(
      <EmployeeList
        employees={employees}
        onStatusChange={() => {}}
      />
    );

    expect(
      screen.getByText("Anu")
    ).toBeInTheDocument();

    expect(
      screen.getByText("UI")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pending")
    ).toBeInTheDocument();
  });

  test("empty state", () => {
    render(
      <EmployeeList
        employees={[]}
        onStatusChange={() => {}}
      />
    );

    expect(
      screen.getByText("No employees found")
    ).toBeInTheDocument();
  });
});