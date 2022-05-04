import React, { ReactNode } from "react"

function AppHeaderMenuButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      style={{ backgroundColor: "#fff0", padding: 0, ...props }}
    ></button>
  )
}

export default AppHeaderMenuButton
