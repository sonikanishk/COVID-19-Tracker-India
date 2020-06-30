import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import ReactCountryFlag from "react-country-flag"
export default function CountryTable(props) {
    
    const  data  = props.countries;
    const [forminput,useforminp] = useState("");
    
    const filtereddata = data.filter(data=>{
      return(
        forminput !=="" ? data.Country.toUpperCase().includes(forminput.toUpperCase()) : data
        
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
          {/* <td>
            {
             
            }
          </td> */}
          <td>{data.Country} <ReactCountryFlag countryCode={data.CountryCode} svg /> </td>
          <td>{data.TotalConfirmed}</td>
          <td>{data.TotalDeaths}</td>
          <td>{data.TotalRecovered}</td>
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
            <Form.Control type="text" placeholder="Search a Country" onChange = {e=>useforminp(e.target.value) } />
          </Form.Group>
        </Form>
        <h2 style={{ margin: "20px" }} >Country wise Distribution </h2>
        <div style={{overflow:"auto",maxHeight:"500px",width: "100%"}}>
          <Table responsive bordered hover style={{ margin: "10px",width:"100%"}} class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th>#</th>
                {/* <th>Flag</th> */}
                <th>Country</th>
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

