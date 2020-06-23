import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

export default function StateTable(props) {
    
    const  data  = props.states;
    const [forminput,useforminp] = useState("");
    
    const filtereddata = data.filter(data=>{
      return(
        forminput !=="" ? data.state.toUpperCase().includes(forminput.toUpperCase()) : data
        
      )
    })
    var index = 0;
    const tabledata = filtereddata.map( (data) =>{
      if(data.state !== "Total" && data.state !== "State Unassigned" ){
      return(
        index++,
        <tbody>
        <tr>  
          <td>{index}</td>
          <td>{data.state}</td>
          <td>{data.confirmed}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
        </tr>
      </tbody>
      )}
      else{
      return(
        <tbody>
          
        </tbody>
      )}
  })
    return(  
      <div style={{fontFamily:'Nunito'}}>    
        <h2 style={{ margin: "5px" }} >Do a Custom Search</h2>
        <Form style={{ margin: "10px" }}>
          <Form.Group controlId="SearchState">
            <Form.Control type="text" placeholder="Search a State" onChange = {e=>useforminp(e.target.value) } />
          </Form.Group>
        </Form>
        <h2 style={{ margin: "20px" }} >Statewise Distribution </h2>
        <div style={{overflow:"auto",maxHeight:"500px",width: "100%"}}>
          <Table responsive bordered hover style={{ margin: "10px",width:"100%"}} class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>State</th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>Total Recoveries</th>
              </tr>
            </thead>
            
            {tabledata}
            
          </Table>
        </div>
      </div>
      
    )
}

