import React from "react"
import { render, screen } from "@testing-library/react"
import BudgetPage from ".."

test("renders learn react link", () => {
  render(<BudgetPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
