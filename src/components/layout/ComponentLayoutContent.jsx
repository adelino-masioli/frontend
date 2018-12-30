import React from 'react'
import { Layout } from 'antd'
import ComponentLayoutBreadcrumb from './ComponentLayoutBreadcrumb'

const { Content } = Layout

export default class ComponentLayoutContent extends React.Component{
    render(){    
        return(
            <Content style={{ margin: '0px 16px 0' }}>
              <ComponentLayoutBreadcrumb/>
              <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>{this.props.children}</div>
            </Content>
        )
    }
  
}
