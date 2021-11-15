import React from "react"
import { render, screen } from "@testing-library/react"
import UpdateDataPage from ".."

test("renders learn react link", () => {
  render(<UpdateDataPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
