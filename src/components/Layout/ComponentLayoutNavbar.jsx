import './Navbar.css'
import React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout


export default class ComponentLayoutNavbar extends React.Component{
    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.action}
                />
            </Header>
        )
    }
  
}
