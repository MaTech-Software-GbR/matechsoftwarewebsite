import { render } from "@testing-library/react"
import ProjectBlock from "./ProjectBlock"

test("renders ProjectBlock component", () => {
  const { container } = render(
    <ProjectBlock
      href="https://example.com"
      title="Example"
      dataSize="1450x700"
      imgSrc="example.jpg"
      imgAlt="Example Image"
      brickTitle="Example Title"
      brickCategory="Example Category"
    />
  )

  expect(container.firstChild).toBeTruthy()
})
