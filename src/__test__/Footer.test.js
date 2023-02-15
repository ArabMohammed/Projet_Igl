import Footer from "../Components/Footer";
import { render, screen } from "@testing-library/react";
test("il faut rendere", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer.js");
  expect(footer).toBeInTheDocument();
});
