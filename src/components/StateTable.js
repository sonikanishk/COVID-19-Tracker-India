import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function StateTable(props) {
    
    const  data  = props.states;

    return(
        <Table responsive bordered hover style={{ margin: "10px" }} height={320}>
          <thead>
            <tr>
              <th>#</th>
              <th>State</th>
              <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>Total Recoveries</th>
            </tr>
          </thead>
          
          {
          data.map( (data,index) =>{
                  return(
                    <tbody>
                    <tr>  
                      <td>{index+1}</td>
                      <td>{data.state}</td>
                      <td>{data.confirmed}</td>
                      <td>{data.deaths}</td>
                      <td>{data.recovered}</td>
                      
                    </tr>
                  </tbody>
                  )
              })}

        </Table>
    )
}

