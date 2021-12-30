import React, { ReactNode } from "react"

export type AppHeaderMenuButtonProps = {
  rprops: any
  ref: any
  title: ReactNode
}

function AppHeaderMenuButton(props: AppHeaderMenuButtonProps){
  return(
    <button
      {...props.rprops}
      ref={props.ref}
      style={{ backgroundColor: "#fff0", padding: 0 }}
    >
      {props.title}
    </button>
  )
}

export default AppHeaderMenuButton