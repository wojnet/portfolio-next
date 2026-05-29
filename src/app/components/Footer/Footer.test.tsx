import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(new RegExp(`© ${currentYear} Wojciech Glid`, 'i'))
    ).toBeInTheDocument()
  });
});