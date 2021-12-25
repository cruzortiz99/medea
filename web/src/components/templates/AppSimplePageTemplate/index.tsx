import React, { Props, ReactNode } from "react"
import { Breadcrumb, Container, Content, Header } from "rsuite"
import { joinClasses } from "../../../utils/css"
import styles from "./AppSimplePageTemplate.module.css"

export type AppSimplePageTemplateProps = {
  mainTitle: ReactNode
  subtitle?: ReactNode
  breadcrumbLinks?: { label: ReactNode; href: string; active?: boolean }[]
  children?: ReactNode
}

function AppSimplePageTemplate(props: AppSimplePageTemplateProps): JSX.Element {
  return (
    <Container>
      <Header className={joinClasses(styles.header)}>
        {props.mainTitle}
        {props.subtitle}
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
