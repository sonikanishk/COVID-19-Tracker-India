import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Charts(props){
    
    const classes = useStyles();
   
    
    return(
        <div id="about" style={{fontFamily: "Nunito"}} >
            <div>
                <Card className={classes.root} variant="outlined" >   
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3> Coronavirus disease (COVID‑19) <i className="fas fa-virus 3x"> </i> </h3>
                        </Typography>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-6">
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h4> Overview </h4>
                        </Typography>
                        <Typography variant="body2" component="p" style={{fontFamily: "Nunito",fontSize:"100%"}}>
                        Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br/>
                        Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.<br/><br/>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom >
                            <h4> How it Spreads </h4>
                        </Typography>
                        <Typography variant="body2" component="p" style={{fontFamily: "Nunito",fontSize:"100%"}}>
                        The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.<br/>
                        You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.<br/><br/>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom >
                            <h4> Treatments </h4>
                        </Typography>
                        <Typography variant="body2" component="p" style={{fontFamily: "Nunito" ,fontSize:"100%"}}>
                            To date, there are no specific vaccines or medicines for COVID-19.<br/>
                            Treatments are under investigation, and will be tested through clinical trials.<br/>
                            If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider or a COVID-19 information line for advice.<br/>
                            Seek medical care if you have a fever, a cough, and difficulty breathing. Call in advance.<br/>
                        </Typography>
                        </div>
                        <div class="col-sm-6">
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h4> Symptoms </h4>
                        </Typography>
                        <Typography variant="body2" component="p" style={{fontFamily: "Nunito",fontSize:"95%"}}>
                            COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. <br/><br/>     
                            <h6> Most common symptoms: </h6>
                            • fever<br/>
                            • dry cough<br/>
                            • tiredness<br/><br/>
                            <h6> Less common symptoms: </h6>
                            • aches and pains<br/>
                            • sore throat<br/>
                            • diarrhoea<br/>
                            • conjunctivitis<br/>
                            • headache<br/>
                            • loss of taste or smell<br/>
                            • a rash on skin, or discolouration of fingers or toes<br/><br/>
                            <h6> Serious symptoms: </h6>
                            • difficulty breathing or shortness of breath<br/>
                            • chest pain or pressure<br/>
                            • loss of speech or movement<br/><br/>
                            Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.<br/>
                            People with mild symptoms who are otherwise healthy should manage their symptoms at home.<br/>
                            On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.<br/>
                        </Typography>
                        
                        </div>
                        </div>
                    </CardContent>
                        <hr/>
                    <CardActions>
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"><Button size="small" >Learn More </Button></a>
                    </CardActions>
        
                </Card>
                
            </div>
        
        </div>
    )
}




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

  
 