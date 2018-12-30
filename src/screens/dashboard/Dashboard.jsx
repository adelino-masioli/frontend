import React, { Component } from "react"
import ComponentLayoutContent from '../../components/layout/ComponentLayoutContent'
 
class Dashboard extends Component {
  render() {
    return (
      <ComponentLayoutContent>
          {this.props.location.pathname}
      </ComponentLayoutContent>
    )
  }
}
 
export default Dashboard