import React, { Component } from "react"
import ComponentLayoutContent from '../../components/layout/ComponentLayoutContent'
import ComponentDatatableTable from '../../components/datatable/ComponentDatatableTable'

class User extends Component {
  render() {

    const columns = 
    [
      {
        title: 'Nome do usuário',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
      }, {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      }, {
        title: 'Tipo',
        dataIndex: 'type',
        sorter: (a, b) => a.type.length - b.type.length,
      }, {
        title: 'Satus',
        dataIndex: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
      }
    ];
    
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i.toString(),
        name: `${i} Edrward`,
        email: `email1@email.com ${i}`,
        type: `Administrador ${i}`,
        status: `Ativo ${i}`,
      });
    }


    return (
      <ComponentLayoutContent>
        <ComponentDatatableTable  columns={columns} dataSource={data}/>
      </ComponentLayoutContent>
    )
  }
}
 
export default User