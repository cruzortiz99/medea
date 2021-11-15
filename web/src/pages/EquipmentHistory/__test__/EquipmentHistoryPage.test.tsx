import React from "react"
import { render, screen } from "@testing-library/react"
import EquipmentHistoryPage from ".."

test("renders learn react link", () => {
  render(<EquipmentHistoryPage pageName="Home" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
