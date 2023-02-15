import AdCard from "../Components/Footer";
import { render, screen } from "@testing-library/react";
test("il faut rendere", () => {
  render(<AdCard />);
  const adCard = screen.getByTestId("adCard.js");
  expect(adCard).toBeInTheDocument();
});