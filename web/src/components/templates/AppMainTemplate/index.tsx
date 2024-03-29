import { Dashboard, Menu } from "@rsuite/icons"
import React, { ReactNode, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { Button, Container, Content, Nav, Sidebar, Sidenav } from "rsuite"
import { Observable } from "rxjs"
import { PAGE_URL } from "../../../constants"
import { RightMenuOption, homeStore } from "../../../store/home"
import { joinClasses } from "../../../utils/css"
import { getVersion } from "../../../utils/env"
import { useObservable } from "../../../utils/rx/hooks"
import { useScreenDimension } from "../../../utils/screen/hooks"
import { faClipboard, faRectangleList, faFileLines, faCreditCard } from "@fortawesome/free-regular-svg-icons"
import { faInfo, faRotate, faBell, faGear, faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Loader from "../../atoms/Loader"
import styles from "./AppMainTemplate.module.css"

export type AppMainTemplateProps = {
  children?: ReactNode
}

function AppMainTemplate(props: AppMainTemplateProps) {
  const screen = useScreenDimension()
  const [leftSideBarOpen, setLeftSideBarOpen] = useState(screen.lg || screen.xl)
  const [rightSideBarOpen, setRightSideBarOpen] = useState(
    screen.lg || screen.xl
  )
  const leftMenuOptions = [
    {
      label: "Avisos y Fallas",
      href: PAGE_URL.ALERTS_FAILURES,
      icon: <FontAwesomeIcon icon={faBell} style={{ paddingRight: "1.2em" }}/>,
    },
    { label: "Ordenes", 
      href: PAGE_URL.ORDERS, 
      icon: <FontAwesomeIcon icon={faFileLines} style={{ paddingRight: "1.2em" }}/> 
    },
    { label: "Costos", 
      href: PAGE_URL.BUDGET, 
      icon: <FontAwesomeIcon icon={faCreditCard} style={{ paddingRight: "1.0em" }}/> 
    },
    {
      label: "Historial de Equipos",
      href: PAGE_URL.EQUIPMENT_HISTORY,
      icon: <FontAwesomeIcon icon={faRectangleList} style={{ paddingRight: "1.0em" }}/>,
    },
    {
      label: "Mantenimiento Preventivo",
      href: PAGE_URL.PREVENTIVE_MAINTENANCE,
      icon: <FontAwesomeIcon icon={faGear} style={{ paddingRight: "1.2em" }}/>,
    },
    {
      label: "Actualizar datos",
      href: PAGE_URL.UPDATE_DATA,
      icon: <FontAwesomeIcon icon={faRotate} style={{ paddingRight: "1.2em" }}/>,
    },
    {
      label: "Documentación",
      href: PAGE_URL.DOCUMENTATION,
      icon: <FontAwesomeIcon icon={faFile} style={{ paddingRight: "1.4em" }}/>,
    },
    { label: "Acerca de",
      href: PAGE_URL.ABOUT, 
      icon: <FontAwesomeIcon icon={faInfo} style={{ paddingRight: "1.7em" }}/> 
    },
  ]
  const [rightMenuOptions] = useObservable<
    RightMenuOption[],
    Observable<RightMenuOption[]>
  >(homeStore.rightMenuOptions.asObservable())
  const path = useLocation().pathname
  const [isLoading] = useObservable(homeStore.isLoading.asObservable())
  return (
    <>
      {isLoading && <Loader />}
      <Container className={joinClasses(styles.appPage)}>
        <Sidebar collapsible width={leftSideBarOpen ? 270 : 76}>
          <Sidenav
            className={joinClasses(
              styles.sidebar,
              leftSideBarOpen ? styles.open : styles.close
            )}
          >
            <Sidenav.Header>
              <Nav className={joinClasses(styles.sidebar, styles.header)}>
                <Nav.Item
                  as={Link}
                  to={PAGE_URL.ALERTS_FAILURES}
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
                  {leftSideBarOpen && (
                    <h3>
                      MEDEA
                      <span className={styles.version}>{getVersion()}</span>
                    </h3>
                  )}
                </Nav.Item>
              </Nav>
            </Sidenav.Header>
            <Sidenav>
              <Sidenav.Body>
                <Nav
                  className={joinClasses(
                    styles.sidebar,
                    styles.left,
                    styles.body
                  )}
                >
                  {leftMenuOptions.map((menuOption, key) => (
                    <Nav.Item
                      as={Link}
                      key={key}
                      active={path === menuOption.href}
                      to={menuOption.href}
                      href={menuOption.href}
                      icon={menuOption.icon}
                      style={{ height: "40px", paddingTop: "12px", paddingLeft: "1.5em" }}
                    >
                      {leftSideBarOpen && menuOption.label}
                    </Nav.Item>
                  ))}
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <Container className={joinClasses(styles.sidebar, styles.footer)}>
              <Button onClick={() => setLeftSideBarOpen((state) => !state)}>
                {leftSideBarOpen ? "Close" : "Open"}
              </Button>
            </Container>
          </Sidenav>
        </Sidebar>
        <Container className={styles.content}>
          <Content>{props.children}</Content>
        </Container>
        {rightMenuOptions && rightMenuOptions.length === 0 ? undefined : (
          <Sidebar
            className={joinClasses(
              styles.right,
              screen.md || screen.sm || screen.xs ? styles.fixed : ""
            )}
            collapsible
            width={rightSideBarOpen ? 270 : 0}
          >
            <Sidenav
              className={joinClasses(
                styles.sidebar,
                styles.right,
                rightSideBarOpen ? styles.open : styles.close
              )}
            >
              <Nav
                appearance="subtle"
                className={joinClasses(
                  styles.sidebar,
                  styles.right,
                  styles.body
                )}
              >
                <Button
                  className={joinClasses(styles.right, styles.sidebarButton)}
                  onClick={() => setRightSideBarOpen((state) => !state)}
                >
                  <Menu />
                </Button>
                {rightMenuOptions?.map((menuOption, key) => (
                  <Nav.Item
                    key={key}
                    href={menuOption.href}
                    style={{ height: "40px", paddingTop: "12px" }}
                  >
                    {rightSideBarOpen && menuOption.label}
                  </Nav.Item>
                ))}
              </Nav>
            </Sidenav>
          </Sidebar>
        )}
      </Container>
    </>
  )
}

export default AppMainTemplate
