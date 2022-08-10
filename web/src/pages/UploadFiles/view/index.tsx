import React, { useRef, useState } from "react"
import { Container, FlexboxGrid, Divider, Uploader, Panel, Button, Col } from "rsuite"
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
  file1: string
  file2: string
  file3: string
  file4: string
  file5: string
  file6: string
}

function UploadFilesPage(
  props: UploadFilesPageViewProps
): JSX.Element {

  const [file1, setFile1] = useState("")
  const [file2, setFile2] = useState("")
  const [file3, setFile3] = useState("")
  const [file4, setFile4] = useState("")
  const [file5, setFile5] = useState("")
  const [file6, setFile6] = useState("")

  const uploaderRef1 = useRef()
  const uploaderRef2 = useRef()
  const uploaderRef3 = useRef()
  const uploaderRef4 = useRef()
  const uploaderRef5 = useRef()
  const uploaderRef6 = useRef()

  const dataFile = new FormData()

  const handleChange1 = (event: any) => {
    setFile1(event)
  }
  const handleChange2 = (event: any) => {
    setFile2(event)
  }
  const handleChange3 = (event: any) => {
    setFile3(event)
  }
  const handleChange4 = (event: any) => {
    setFile4(event)
  }
  const handleChange5 = (event: any) => {
    setFile5(event)
  }
  const handleChange6 = (event: any) => {
    setFile6(event)
  }
  
  const handleUpload = () => {
    uploaderRef1.current
    uploaderRef2.current
    uploaderRef3.current
    uploaderRef4.current
    uploaderRef5.current
    uploaderRef6.current
    dataFile.append("file", file1)
    dataFile.append("file", file2)
    dataFile.append("file", file3)
    dataFile.append("file", file4)
    dataFile.append("file", file5)
    dataFile.append("file", file6)
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
          <Col xs={24}>
            <Panel
              bordered
              className={styles.panelContainer}
            >
              <Container
                className={styles.flexPanelContainer}
              >
                <div className={styles.divPadding}>
                  <FlexboxGrid justify="center">
                    <Uploader 
                      action={props.dataFile1}
                      autoUpload={false}
                      onChange={handleChange1}
                      ref={uploaderRef1}
                      className={styles.lineUpload}
                    >
                      <div>
                        Click or Drag files to this area to upload
                      </div>
                    </Uploader>
                  </FlexboxGrid>
                  <Divider className={styles.divider}/>
                  <FlexboxGrid justify="center">
                    <Uploader
                      action={props.dataFile2}
                      autoUpload={false}
                      onChange={handleChange2}
                      ref={uploaderRef2}
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
                  <FlexboxGrid justify="center">
                    <Uploader
                      action={props.dataFile3}
                      autoUpload={false}
                      onChange={handleChange3}
                      ref={uploaderRef3}
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
                <Divider className={styles.divider1340}/>
                <div>
                  <FlexboxGrid justify="center">
                    <Uploader
                      action={props.dataFile4}
                      autoUpload={false}
                      onChange={handleChange4}
                      ref={uploaderRef4}
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
                  <FlexboxGrid justify="center">
                    <Uploader
                      action={props.dataFile5}
                      autoUpload={false}
                      onChange={handleChange5}
                      ref={uploaderRef5}
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
                  <FlexboxGrid justify="center">
                    <Uploader
                      action={props.dataFile6}
                      autoUpload={false}
                      onChange={handleChange6}
                      ref={uploaderRef6}
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
              <FlexboxGrid justify="end">
                <Button
                  appearance="primary"
                  onClick={handleUpload}
                >
                  Subir
                  <FontAwesomeIcon icon={faUpload} style={{ paddingLeft: "3px" }}/>
                </Button>
              </FlexboxGrid>
            </Panel>
          </Col>
        </Container>
      </Container>
    </>
  )
}

export default UploadFilesPage