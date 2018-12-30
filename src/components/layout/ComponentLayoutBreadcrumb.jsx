import React from 'react'
import {  Breadcrumb } from 'antd'

export default class ComponentLayoutBreadcrumb extends React.Component{
    render(){    
        return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Usuários</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
  
}
