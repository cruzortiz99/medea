import React from "react"
import { render, screen } from "@testing-library/react"
import AlertAndFailurePage from ".."

test("renders learn react link", () => {
  render(<AlertAndFailurePage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
