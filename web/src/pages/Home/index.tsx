import React, { useRef, useState } from "react"
import { Container, Content, Header, Sidenav, Sidebar, Button } from "rsuite"
import { AppRoutedPage } from "../../routes/routes"
import { joinClasses } from "../../utils/css-classes"
import styles from "./Home.module.css"

function App(props: AppRoutedPage) {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  return (
    <Container className={joinClasses(styles.appPage)}>
      <Sidebar collapsible width={sideBarOpen ? 270 : 70}>
        <Sidenav
          className={joinClasses(
            styles.sidebar,
            sideBarOpen ? styles.open : styles.close
          )}
          expanded={sideBarOpen}
        >
          <Sidenav.Header
            className={joinClasses(styles.sidebar, styles.header)}
          >
            <h3>MENEA</h3>
          </Sidenav.Header>
          <Sidenav>
            <Sidenav.Body className={joinClasses(styles.sidebar, styles.body)}>
              Links
            </Sidenav.Body>
          </Sidenav>
          <Container className={joinClasses(styles.sidebar, styles.footer)}>
            <Button onClick={() => setSideBarOpen((state) => !state)}>
              {sideBarOpen ? "Close" : "Open"}
            </Button>
          </Container>
        </Sidenav>
      </Sidebar>
      <Container className={styles.content}>
        <Content>Content</Content>
      </Container>
    </Container>
  )
}

export default App
