import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import BackToTopButton from "./BackToTopButton"

const buttonTitle = "Back to Top"

test("renders button when isVisible is true", () => {
  render(<BackToTopButton isVisible />)
  const buttonElement = screen.getByTitle(buttonTitle)
  expect(buttonElement).toBeInTheDocument()
})

test("does not render button when isVisible is false", () => {
  render(<BackToTopButton isVisible={false} />)
  const buttonElement = screen.queryByTitle(buttonTitle)
  expect(buttonElement).toBeNull()
})

test("clicking on the button calls scrollToTop", () => {
  // Mock the scrollTo method
  window.scrollTo = jest.fn()

  render(<BackToTopButton isVisible />)
  const buttonElement = screen.getByTitle(buttonTitle)

  // Trigger a click on the button
  fireEvent.click(buttonElement)

  // Expect the scrollTo method to be called with the specified parameters
  expect(window.scrollTo).toHaveBeenCalledWith({
    behavior: "smooth",
    top: 0
  })
})
