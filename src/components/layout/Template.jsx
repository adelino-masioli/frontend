import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../main/Routes'

import { Layout } from 'antd'
import ComponentLayoutNavbar from './ComponentLayoutNavbar'
import ComponentLayoutSidebar from './ComponentLayoutSidebar'
import ComponentLayoutFooter from './ComponentLayoutFooter'


export default class Template extends React.Component{
    state = {
        collapsed: true
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed
        })
    }


    render(){
        return(
            <BrowserRouter>
                <Layout style={{height:"100vh"}}>
                    <ComponentLayoutSidebar collapsed={this.state.collapsed}/>
                <Layout>
                    <ComponentLayoutNavbar action={this.toggle} collapsed={this.state.collapsed}/>
                        <Routes/>
                    <ComponentLayoutFooter/>
                </Layout>
            </Layout>
          </BrowserRouter>
        )
    }
  
}
