import './Logo.css'
import React from 'react'


export default class ComponentLayoutLogo extends React.Component{
    render(){
        return(
            <div className="logo">
                {this.props.collapsed }
                {this.props.collapsed === true && <span>DHS</span> }
                {this.props.collapsed  === false && 'Dashboard'}
            </div>
        )
    }
  
}
