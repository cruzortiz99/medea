import React from "react"
import { Container, FlexboxGrid, Divider, Uploader, Panel, Button } from "rsuite"
import { Dashboard } from "@rsuite/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import styles from "./UploadFilesPage.module.css"


function UploadFilesPage(): JSX.Element {
  return (
    <>
      <Container className={styles.flexContainer}>
        <Container className={styles.flexTitle}>
          <FlexboxGrid className={styles.flexPadding}>
            <Dashboard
              style={{
                fontSize: "40px",
                height: "40px",
              }}
            />
          </FlexboxGrid>
          <FlexboxGrid>
            <h1>MEDEA</h1>
          </FlexboxGrid>
        </Container>
        <Container>
          <Panel
            bordered
            className={styles.panelContainer}
          >
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <div style={{ paddingRight: "20px" }} >
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div
                      style={{
                        lineHeight: "50px",
                        padding: "8px 100px",
                        border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
                <Divider className={styles.divider}/>
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div 
                      style={{
                      lineHeight: "50px",
                      padding: "8px 100px",
                      border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
                <Divider className={styles.divider}/>
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div
                      style={{
                        lineHeight: "50px",
                        padding: "8px 100px",
                        border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
              </div>
              <div>
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div
                      style={{
                        lineHeight: "50px",
                        padding: "8px 100px",
                        border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
                <Divider className={styles.divider}/>
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div 
                      style={{
                        lineHeight: "50px",
                        padding: "8px 100px",
                        border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
                <Divider className={styles.divider}/>
                <FlexboxGrid
                  justify="center"
                >
                  <Uploader
                    action=""
                    autoUpload={false}
                  >
                    <div
                      style={{
                        lineHeight: "50px",
                        padding: "8px 100px",
                        border: "1px dashed black"
                      }}
                    >
                      Click or Drag files to this area to upload
                    </div>
                  </Uploader>
                </FlexboxGrid>
              </div>
            </Container>
            <Divider className={styles.divider}/>
            <FlexboxGrid
              justify="end"
            >
              <Button
                appearance="primary"
              >
                Subir
                <FontAwesomeIcon icon={faUpload} style={{ paddingLeft: "3px" }}/>
              </Button>
            </FlexboxGrid>
          </Panel>
        </Container>
      </Container>
    </>
  )
}

export default UploadFilesPage