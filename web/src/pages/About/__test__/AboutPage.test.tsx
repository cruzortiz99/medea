import React from "react"
import { render, screen } from "@testing-library/react"
import AboutPage from ".."

test("renders learn react link", () => {
  render(<AboutPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
