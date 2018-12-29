import React from 'react'
import { Layout } from 'antd'
import ComponentLayoutNavbar from './ComponentLayoutNavbar'
import ComponentLayoutSidebar from './ComponentLayoutSidebar'
import ComponentLayoutContent from './ComponentLayoutContent'
import ComponentLayoutFooter from './ComponentLayoutFooter'


export default class Template extends React.Component{
    state = {
        collapsed: true,
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        })
    }

    render(){
        return(
            <Layout style={{height:"100vh"}}>
                <ComponentLayoutSidebar collapsed={this.state.collapsed}/>
            <Layout>
                <ComponentLayoutNavbar action={this.toggle} collapsed={this.state.collapsed}/>
                <ComponentLayoutContent/>
                <ComponentLayoutFooter/>
            </Layout>
          </Layout>
        )
    }
  
}
