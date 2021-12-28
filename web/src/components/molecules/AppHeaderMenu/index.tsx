import React, { useState, ReactNode } from "react"
import { Dropdown } from "rsuite"

export type AppHeaderMenuProps = {
  renderToggle?: (props: any, ref: any) => any
  item: { 
    label?: ReactNode, 
    id?: string, 
    active?: boolean, 
    onClick?: () => any 
  }[]
}

function AppHeaderMenu(props: AppHeaderMenuProps){
  return(
    <>
     <Dropdown
      noCaret
      renderToggle={props.renderToggle}
     >
       {props.item.map((item) => (
         <Dropdown.Item
          key={item.id}
          active={item.active}
          onClick={item.onClick}
         >
           {item.label}
         </Dropdown.Item>
       ))}
     </Dropdown>
    </>
  )
}

export default AppHeaderMenu