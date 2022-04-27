import React from "react"
import { Sidenav, Nav, Container, Header, Sidebar, Content, FlexboxGrid, Divider, Uploader } from "rsuite"
import { Dashboard } from "@rsuite/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"
import AppPanelContainer from "../../components/atoms/PanelContainer"
import AppPanel from "../../components/atoms/Panel"

function UploadFilesPage(): JSX.Element {
  return (
    <>
      <Container>
        <Sidebar
          style={{
            flex: "0 0 76px"
          }}
        >
          <Sidenav>
            <Sidenav.Header>
              <Nav
                style={{
                  minHeight: "60px",
                  height: "60px",
                  marginBottom: "0px"
                }}
              >
                <Nav.Item
                  style={{
                    paddingTop: "0.25rem",
                    height: "100%"
                  }}
                  icon={
                    <Dashboard
                      style={{
                        fontSize: "25px",
                        height: "25px",
                      }}
                    />
                  }
                />
              </Nav>
            </Sidenav.Header>
              <Sidenav>
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item
                      style={{
                        height: "40px",
                        paddingTop: "12px",
                        paddingLeft: "1.5em"
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faInfo}
                        style={{
                          paddingRight: "1.7em"
                        }}
                      />
                    </Nav.Item>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              </Sidenav>
            </Sidebar>
        <Container
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            padding: "10px"
          }}
        >
          <Header>
            <FlexboxGrid>
              <FlexboxGrid.Item>
                <h3>MEDEA</h3>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Header>
          <Content>
            <h4>Cargar Archivo</h4>
            <Divider />
            <AppPanelContainer>
              <div>
                <AppPanel>
                  <Uploader
                    action={""} 
                    draggable
                  >
                    <div
                      style={{
                        lineHeight: "300px"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </AppPanel>
              </div>
            </AppPanelContainer>
          </Content>
        </Container>
      </Container>
    </>
  )
}

export default UploadFilesPage