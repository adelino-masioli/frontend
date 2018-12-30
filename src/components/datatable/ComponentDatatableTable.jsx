import React from 'react'
import { Table } from 'antd'


export default class ComponentDatatableTable extends React.Component{
    render(){
        return(
            <Table 
                columns={this.props.columns} 
                dataSource={this.props.dataSource} 
                pagination={{ pageSize: 6 }}
            />
        )
    }
  
}
