import React from "react"
import { render, screen } from "@testing-library/react"
import OrderPage from ".."

test("renders learn react link", () => {
  render(<OrderPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
