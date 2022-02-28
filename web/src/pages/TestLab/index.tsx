import React from "react"
import { createIconFont, Icon } from "@rsuite/icons"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function TestPage() {
  return (
    <>
      <h2>TestLab</h2>
      <div>
        <div>
          <FontAwesomeIcon icon={faFolderOpen} style={{ width: "50px", height: "50px", color: "#0EDA21" }}/>
        </div>
      </div>
    </>
  )
}

export default TestPage
