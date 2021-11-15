import React from "react"
import { render, screen } from "@testing-library/react"
import PreventiveMaintenancePage from ".."

test("renders learn react link", () => {
  render(<PreventiveMaintenancePage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
