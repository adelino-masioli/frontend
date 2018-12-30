import './Sidebar.css'
import React from 'react'

import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import ComponentLayoutLogo from './ComponentLayoutLogo'

const { Sider } = Layout


export default class ComponentLayoutSidebar extends React.Component{
    render(){
        return(
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <ComponentLayoutLogo collapsed={this.props.collapsed} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/users">
                        <Icon type="user" />
                        <span>Usuários</span>
                    </Link>
                </Menu.Item>
                </Menu>
          </Sider>
        )
    }
  
}
