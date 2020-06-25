// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Overall(props) {
//     const{deaths,confirmed,recovered,time} = props.status;

//     return(
//         <CardDeck style={{ margin: "10px" }} >
//           <Card bg="secondary" text="white" className="text-center">
//             <Card.Body>
//               <Card.Title>Total Cases</Card.Title>
//               <Card.Text>
//                 {confirmed}
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <small>Last updated {time}</small>
//             </Card.Footer>
//           </Card>
//           <Card bg="danger" text="white" className="text-center" >
//             <Card.Body>
//               <Card.Title>Total Deaths</Card.Title>
//               <Card.Text>
//                 {deaths}
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <small>Last updated {time}</small>
//             </Card.Footer>
//           </Card>
//           <Card bg="success" text="white" className="text-center" >
//             <Card.Body>
//               <Card.Title>Total Recoveries</Card.Title>
//               <Card.Text>
//                 {recovered}
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <small>Last updated {time}</small>
//             </Card.Footer>
//           </Card>
//         </CardDeck>
//     )
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Overall(props) {
  const classes = useStyles();
  const{deaths,confirmed,recovered,time} = props.status;
  var date = moment(time,'DD/MM/YYYY HH:mm:ss').format('LL');
  if(!confirmed){
    return('Loading...')
  };
  return (
    <div className="row" style={{marginBottom: "20px"}}>
      <div className="col-md-4">
        <Card className={classes.root} variant="outlined" style={{borderBottom: "10px solid rgba(0,0,255,0.5)" }}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Cases 
              <hr></hr>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end = {confirmed}
                duration = {3}
                separator = ","
              />
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              As on  {date}
            </Typography>
            <Typography variant="body2" component="p">
              Number of Cases of COVID-19
              <br />
              
            </Typography>
          </CardContent>
        </Card >
      </div>
      <div className="col-md-4">
        <Card className={classes.root} variant="outlined" style={{borderBottom: "10px solid rgba(255,0,0,0.5)" }}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Deceased
              <hr></hr>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end = {deaths}
                duration = {2.5}
                separator = ","
              />
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              As on  {date}
            </Typography>
            <Typography variant="body2" component="p">
              Deaths caused by COVID-19
              <br />
              
            </Typography>
          </CardContent>
          
        </Card>
      </div>
      <div className="col-md-4">
      <Card className={classes.root} variant="outlined" style={{borderBottom: "10px solid rgba(0,255,0,0.5)" }}>
        <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Recoveries
                <hr></hr>
              </Typography>
              
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end = {recovered}
                  duration = {3}
                  separator = ","
                />
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                As on  {date}
              </Typography>
              <Typography variant="body2" component="p">
                Recoveries from COVID-19
                <br />
                
              </Typography>
          </CardContent>  
        </Card>
      </div>
    </div>
    
  );
}