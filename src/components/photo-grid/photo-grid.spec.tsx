import { render, screen, waitFor } from "@testing-library/react";
import { Modal } from "../modal";
import { PhotoGrid } from "./index";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

vi.mock("../../firebase/queries", () => ({
  getSingleItemFromCollection: vi.fn().mockResolvedValue({
    profileUrl: "www.someurl.com.br",
    profileImageUrl: "/profile-photo",
    profileUsername: "icestellarita",
  }),
  getAllItemsFromCollection: vi.fn().mockResolvedValue([
    {
      data: {
        url_squared: "/some-path",
        url: "/some-path",
        description: "simple description",
        title: "title 1",
      },
      key: "some key 1",
    },
  ]),
}));

describe("<PhotoGrid />", () => {
  it("should pass correct attributes to items", async () => {
    render(await PhotoGrid());

    expect(
      screen.getAllByRole("link", {
        name: "Link that redirects to Instagram profile.",
      })[0]
    ).toHaveAttribute("href", "www.someurl.com.br");

    expect(
      screen.getAllByRole("img", { name: "profile photo from icestellarita" })
    ).toHaveLength(1);

    expect(screen.getByText("simple description")).toBeInTheDocument();
    expect(screen.getByText("title 1")).toBeInTheDocument();
  });

  it("should open modal when user click on image", async () => {
    render(await PhotoGrid());

    userEvent.click(
      screen.getByLabelText(
        "a clickable image that opens the artwork named title 1 in full size."
      )
    );
    expect(await screen.findByTestId("modal")).toBeInTheDocument();
  });

  it("should close modal when user clicks on close in modal", async () => {
    const toggleModalMock = vi.fn();

    render(<Modal toggleModal={toggleModalMock} content={<h1>Mock</h1>} />);

    userEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => expect(toggleModalMock).toHaveBeenCalled());
  });
});
