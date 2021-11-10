import React, { useState } from "react"
import { Container, Content, Header, Sidenav, Sidebar, Button } from "rsuite"
import { AppRoutedPage } from "../../routes/routes"
import { joinClasses } from "../../utils/css-classes"
import styles from "./Home.module.css"

function App(props: AppRoutedPage) {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  return (
    <Container className={joinClasses(styles.appPage)}>
      <Sidenav className={joinClasses(styles.sidebar)} expanded={sideBarOpen}>
        <Sidenav.Header>MENEA</Sidenav.Header>
        <Sidenav>
          <Sidenav.Body>Links</Sidenav.Body>
        </Sidenav>
        <Button onClick={() => setSideBarOpen((state) => !state)}>Open</Button>
      </Sidenav>
      <Container className={styles.content}>
        <Content>Content</Content>
      </Container>
    </Container>
  )
}

export default App
