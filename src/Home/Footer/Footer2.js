

import React from 'react';
import Typography from '@material-ui/core/Typography';
 
import {Grid} from "@material-ui/core";

import Component1 from '../Advantages/Component1/Component1';


  const Footer2 =() =>{
    
  
    return (
 
        <Grid direction="column">
            <Grid item container>
                <Grid container  >
                <Grid item xs={2} sm={2} />
                <Grid item  xs={8} sm={3} justify="flex-end" alignItems="flex-end">
                    <Component1 /> 
                </Grid>

                <Grid item xs={3} sm={1} />
                <Grid item container xs={8} sm={4}  justify="flex-start" alignItems="center">
                    <Typography>
                        <h1>Comprehensive Career Guide</h1>
                        <h4>Preparing for a job goes beyond learning materials. We help you with practice pathways to prioritize the skills
                         to learn and perform best at the interview.</h4>
                    </Typography>
                </Grid>
             
               </Grid>

            </Grid>

            <Grid item container>
            <Grid item container>
                <Grid container  >
                <Grid item xs={3} sm={2} />
                <Grid item container xs={8} sm={3} justify="flex-end" alignItems="center">
                <Typography>
                        <h1>Connect with Professionals</h1>
                        <h4>Preparing for a job goes beyond learning materials. We help you with practice pathways to prioritize the skills
                         to learn and perform best at the interview.</h4>
                    </Typography>
              
                </Grid>

                <Grid item xs={2} sm={1} />
                <Grid item  xs={8} sm={3}  justify="flex-start" alignItems="flex-start">
                    <Component1 />          
                 </Grid>
             
               </Grid>

            </Grid>
                
            </Grid>

            <Grid item container>

            <Grid item container>
                <Grid container  >
                <Grid item xs={2} sm={2} />
                <Grid item  xs={8} sm={3} justify="flex-end" alignItems="flex-end">
                    <Component1 /> 
                </Grid>

                <Grid item xs={3} sm={1} />
                <Grid item container xs={6} sm={4}  justify="flex-start" alignItems="center">
                    <Typography>
                        <h1>Crack Interviews</h1>
                        <h4>Preparing for a job goes beyond learning materials. We help you with practice pathways to prioritize the skills
                         to learn and perform best at the interview.</h4>
                    </Typography>
                </Grid>
             
               </Grid>

            </Grid>

            </Grid>

        </Grid>
 

        );
    };
     export default Footer2;
