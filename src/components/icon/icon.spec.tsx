import { render, screen } from "@testing-library/react";
import { Icon } from "./index";

describe("<Icon />", () => {
  it("should render an icon when key is valid", () => {
    render(<Icon use="linkedin" />);
    expect(screen.getByTestId("icon of linkedin")).toBeInTheDocument();
  });

  it("should render an icon when key is valid", () => {
    // @ts-ignore: Testing invalid input and check its behavior
    render(<Icon use="none" />);
    expect(screen.queryByTestId(/icon/i)).not.toBeInTheDocument();
  });
});
