import { render } from "@testing-library/react"

import ProjectBlock from "./ProjectBlock"

test("renders ProjectBlock component", () => {
  const { container } = render(
    <ProjectBlock
      brickCategory="Example Category"
      brickTitle="Example Title"
      dataSize="1450x700"
      href="https://example.com"
      imgAlt="Example Image"
      imgSrc="example.jpg"
      title="Example"
    />
  )

  expect(container.firstChild).toBeTruthy()
})
