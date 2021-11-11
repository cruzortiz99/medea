import React, { useState } from "react"
import { Button, Container, Content, Nav, Sidebar, Sidenav } from "rsuite"
import { Dashboard } from "@rsuite/icons"
import { AppRoutedPage } from "../../routes/routes"
import { joinClasses } from "../../utils/css-classes"
import styles from "./Home.module.css"

function App(props: AppRoutedPage) {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  return (
    <Container className={joinClasses(styles.appPage)}>
      <Sidebar collapsible width={sideBarOpen ? 270 : 76}>
        <Sidenav
          className={joinClasses(
            styles.sidebar,
            sideBarOpen ? styles.open : styles.close
          )}
        >
          <Sidenav.Header>
            <Nav className={joinClasses(styles.sidebar, styles.header)}>
              <Nav.Item
                icon={
                  <Dashboard
                    style={{
                      fontSize: "25px",
                      height: "25px",
                    }}
                  />
                }
                style={{ paddingTop: "0.25rem", height: "100%" }}
              >
                {sideBarOpen && <h3>MENEA</h3>}
              </Nav.Item>
            </Nav>
          </Sidenav.Header>
          <Sidenav>
            <Sidenav.Body>
              <Nav className={joinClasses(styles.sidebar, styles.body)}>
                <Nav.Item icon={<Dashboard />} style={{ height: "1rem" }}>
                  {sideBarOpen && "Avisos y Fallas"}
                </Nav.Item>
                <Nav.Item icon={<Dashboard />} style={{ height: "1rem" }}>
                  {sideBarOpen && "Avisos"}
                </Nav.Item>
              </Nav>
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
