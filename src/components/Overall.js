import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Overall(props) {
    const{deaths,confirmed,recovered,time} = props.status;

    return(
        <CardDeck style={{ margin: "10px" }} >
          <Card bg="secondary" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Total Cases</Card.Title>
              <Card.Text>
                {confirmed}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {time}</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text="white" className="text-center" >
            <Card.Body>
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
                {deaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {time}</small>
            </Card.Footer>
          </Card>
          <Card bg="success" text="white" className="text-center" >
            <Card.Body>
              <Card.Title>Total Recoveries</Card.Title>
              <Card.Text>
                {recovered}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {time}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
    )
}
