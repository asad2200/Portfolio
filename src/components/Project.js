import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {projects} from "./Projects";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#090C10",
    minHeight: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    backgroundColor:"#0D1117",
    color:"#C9D1D9",
    border:"1px solid #30363D",
  },
  btn:{
    backgroundColor:"#3E8637",
    color:"#F0F6FC",
    '&:hover': {
      backgroundColor: '#3E8637',
      opacity:"0.7",
    },
  },
  btn2:{
    paddingTop:"-1rem",
    paddingBottom:"2rem", 
  },
  footer:{
    backgroundColor: "#090C10",
  },
  list:{
    fontSize:"1rem",
    marginBottom:"2px",
  },
}));


const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => {
          var tmp = project.description
          return(
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                /> */}
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <ul >
                      {tmp.map((line, key) => (
                        <li key={key} className={classes.list}>{line}</li>
                      ))}
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.footer}>
                <Button variant="contained" className={classes.btn} target="_blank" rel="noopener" href={project.source_code}>
                  Source Code
                </Button>
                {project.live ?
                <Button variant="contained" className={classes.btn} target="_blank" rel="noopener" href={project.live}>
                  Live Demo
                </Button> : ""}
                
              </CardActions>
            </Card>
          </Grid>
        )})}
      </Grid>
      <Grid container justify="center" className={classes.btn2}>
        <Button variant="contained" className={classes.btn} target="_blank" rel="noopener" href="https://github.com/asad2200">
                    Check More Projects on Github
        </Button>
      </Grid>      
    </Box>
  );
};

export default Project;
