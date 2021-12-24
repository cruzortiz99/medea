import React, { Props, ReactNode } from "react"
import { Breadcrumb, Container, Content, Header, Dropdown } from "rsuite"
import { joinClasses } from "../../../utils/css"
import styles from "./AppSimplePageTemplate.module.css"

export type AppSimplePageTemplateProps = {
  mainTitle: ReactNode
  mainDescription: ReactNode
  breadcrumbLinks?: { label: ReactNode; href: string; active?: boolean }[]
  children?: ReactNode
  dateFilter?: { label: string, active?: boolean } []
  equipementFilter?: { label: string, active?: boolean } []
  processFilter?: { label: string, active?: boolean } []
}


function AppSimplePageTemplate(props: AppSimplePageTemplateProps): JSX.Element {
  const renderDate = (
    props: React.HTMLAttributes<HTMLParagraphElement>, 
    ref: React.LegacyRef<HTMLParagraphElement> | undefined
    ) => {
    return(
      <p {...props} ref={ref}>Noviembre 2021</p>
    )
  }
  const renderEquipament = (
    props: React.HTMLAttributes<HTMLParagraphElement>, 
    ref: React.LegacyRef<HTMLParagraphElement> | undefined
    ) => {
    return(
      <p {...props} ref={ref}>Equipo A</p>
    )
  }
  const renderProcess = (
    props: React.HTMLAttributes<HTMLParagraphElement>, 
    ref: React.LegacyRef<HTMLParagraphElement> | undefined
    ) => {
    return(
      <p {...props} ref={ref}>Proceso 1</p>
    )
  }

  return (
    <Container>
      <Header className={joinClasses(styles.header)}>
        <h3>{props.mainTitle}</h3>
        <p>
          {props.dateFilter && (
            <Dropdown
            renderToggle={renderDate}
            noCaret
            >
              {props.dateFilter.map(
                (dateFilter, key) => (
                <Dropdown.Item 
                key={key}
                active={dateFilter.active}
                >
                  {dateFilter.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
          )}
        </p>
        <p>
        {props.equipementFilter && (
            <Dropdown
            renderToggle={renderEquipament}
            noCaret
            >
              {props.equipementFilter.map(
                (equipementFilter, key) => (
                <Dropdown.Item 
                key={key}
                active={equipementFilter.active}
                >
                  {equipementFilter.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
          )}
        </p>       
        <p>
        {props.processFilter && (
            <Dropdown
            renderToggle={renderProcess}
            noCaret
            >
              {props.processFilter.map(
                (processFilter, key) => (
                <Dropdown.Item 
                key={key}
                active={processFilter.active}
                >
                  {processFilter.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
          )}
        </p>
        <br />
        {props.breadcrumbLinks && (
          <Breadcrumb>
            {props.breadcrumbLinks.map((breadCrumbLink) => (
              <Breadcrumb.Item
                key={breadCrumbLink.href}
                href={breadCrumbLink.href}
                active={breadCrumbLink.active}
              >
                {breadCrumbLink.label}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
      </Header>
      <Content className={joinClasses(styles.content)}>
        <Container style={{ minHeight: "200vh" }}>{props.children}</Container>
      </Content>
    </Container>
  )
}

export default AppSimplePageTemplate
