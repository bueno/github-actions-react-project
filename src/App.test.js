import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render a learn react link", () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render a learn github actions link", () => {
    render(<App />);

    const linkElement = screen.getByText(/learn gitHub actions/i);
    expect(linkElement).toBeInTheDocument();
  });
});
