import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe("Home Page", () => {
  it("renders the title", () => {
    render(<Home />); 
    expect(screen.getByRole("heading", { name: "Pre-Rendering Demo with Next.js"})
      ).toBeInTheDocument();
  });

});