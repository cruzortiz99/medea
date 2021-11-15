import React from "react"
import { render, screen } from "@testing-library/react"
import DocumentationPage from ".."

test("renders learn react link", () => {
  render(<DocumentationPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
