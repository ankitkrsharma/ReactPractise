import { render, screen } from "@testing-library/react";
import EventDetails from "./EventDetails";

describe("EventDetails", () => {
  test("renders event details correctly", () => {
    render(<EventDetails />);

    expect(
      screen.getByText("Event Name: Friday Team Lunch")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Venue: Green Bowl Cafe")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Time: 1:00 PM")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Day: Friday")
    ).toBeInTheDocument();
  });
});