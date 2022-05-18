import React, { ReactNode, useRef, useState } from "react"
import { Container, FlexboxGrid, Divider, Uploader, Panel, Button } from "rsuite"
import { Dashboard } from "@rsuite/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import styles from "./UploadFilesPage.module.css"


export type UploadFilesPageViewProps = {
  dataFile1: string
  dataFile2: string
  dataFile3: string
  dataFile4: string
  dataFile5: string
  dataFile6: string
}

function UploadFilesPage(
  props: UploadFilesPageViewProps
): JSX.Element {
  const [uploader1, setUploader1] = useState([])
  const uploaderRef1 = useRef()
  const startUpload = () => {
    //uploaderRef1.current.start()
  }
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
                    //value={uploader1}
                    action={props.dataFile1}
                    autoUpload={false}
                   //onChange={setUploader1}
                    ref={uploaderRef1}
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
                    action={props.dataFile2}
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
                    action={props.dataFile3}
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
                    action={props.dataFile4}
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
                    action={props.dataFile5}
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
                    action={props.dataFile6}
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
                onClick={startUpload}
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