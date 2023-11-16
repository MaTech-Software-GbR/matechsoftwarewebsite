import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import BackToTopButton from "./BackToTopButton"

test("renders button when isVisible is true", () => {
  render(<BackToTopButton isVisible />)
  const buttonElement = screen.getByTitle("Back to Top")
  expect(buttonElement).toBeInTheDocument()
})

test("does not render button when isVisible is false", () => {
  render(<BackToTopButton isVisible={false} />)
  const buttonElement = screen.queryByTitle("Back to Top")
  expect(buttonElement).toBeNull()
})

test("clicking on the button calls scrollToTop", () => {
  // Mock the scrollTo method
  window.scrollTo = jest.fn()

  render(<BackToTopButton isVisible />)
  const buttonElement = screen.getByTitle("Back to Top")

  // Trigger a click on the button
  fireEvent.click(buttonElement)

  // Expect the scrollTo method to be called with the specified parameters
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    behavior: "smooth"
  })
})
