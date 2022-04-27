import React from "react"
import { render, screen } from "@testing-library/react"
import UploadFilesPage from ".."

test("renderd learn react link", () => {
  render(<UploadFilesPage/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})