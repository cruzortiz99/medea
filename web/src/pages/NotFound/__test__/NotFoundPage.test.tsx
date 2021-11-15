import React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundPage from ".."

test("renders learn react link", () => {
  render(<NotFoundPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
