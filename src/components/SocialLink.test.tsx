import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import SocialLink from "./SocialLink"

describe("SocialLink", () => {
  it("renders with given href, iconClass, and linkText", () => {
    const expectedLinkText = "Test Link"
    const { getByText } = render(
      <SocialLink
        href="https://example.com"
        iconClass="test-icon"
        linkText={expectedLinkText}
      />
    )

    const socialLinkElement = getByText(new RegExp(expectedLinkText, "i"))
    expect(socialLinkElement).toBeInTheDocument()
  })
})
