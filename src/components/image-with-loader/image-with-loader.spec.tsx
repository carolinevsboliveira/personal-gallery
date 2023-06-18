import { render, screen, fireEvent } from "@testing-library/react";
import { ImageWithLoader } from "./index";

describe("<ImageWithLoader />", () => {
  it("should show loader when image is not ready", () => {
    render(<ImageWithLoader alt="test-image" src="/some-location" fill />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should show image when is fully loaded", async () => {
    render(<ImageWithLoader alt="test-image" src="/some-location" fill />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    fireEvent.load(screen.getByRole("figure", { hidden: true }));

    expect(await screen.findByRole("figure", { hidden: true })).toHaveStyle(
      "visibility: visible"
    );
  });
});
