import AccountHead from "../Components/Footer";
import { render, screen } from "@testing-library/react";
test("il faut rendere", () => {
  render(<AccountHead />);
  const accountHead = screen.getByTestId("accountHead.js");
  expect(accountHead).toBeInTheDocument();
});