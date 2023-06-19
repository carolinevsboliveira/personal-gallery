import { render, screen } from "@testing-library/react";
import { Hero } from "./index";
import { vi } from "vitest";

vi.mock("../../firebase/queries", () => ({
  getSingleItemFromCollection: vi.fn().mockResolvedValue({
    profile_photo: "https://www.somepathforphoto.com.br/my-photo",
    subtitle: "Some description",
    instagram_account: "@some_account",
  }),
  getAllItemsFromCollection: vi.fn().mockResolvedValue([
    {
      data: {
        name: "github",
        url: "https://www.mock1.com.br/",
      },
      key: "some-key",
    },
    {
      data: {
        url: "https://www.mock2.com.br/",
        name: "linkedin",
      },
      key: "some-key2",
    },
  ]),
}));

describe("<Hero />", () => {
  it("should render all links that came to response", async () => {
    render(await Hero());
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("should render all information of hero content", async () => {
    render(await Hero());
    expect(screen.getByText("Some description")).toBeInTheDocument();
    expect(screen.getByText("@some_account")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "profile image" })
    ).toBeInTheDocument();
  });
});
