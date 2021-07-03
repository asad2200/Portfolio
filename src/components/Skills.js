import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import html5 from "../images/skills/html5.svg";
import css3 from "../images/skills/css3.svg";
import js from "../images/skills/js.svg";
import python from "../images/skills/python.svg";
import java from "../images/skills/java.svg";
import c from "../images/skills/c.svg";
import cpp from "../images/skills/cpp.svg";

import django from "../images/skills/django.svg";
import react from "../images/skills/react.svg";
import drs from "../images/skills/drs.png";

import github from "../images/skills/github.svg";
import sqllite from "../images/skills/sqllite.svg";
// import postgres from "../images/skills/postgres.svg";
import mysql from "../images/skills/mysql.svg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#090C10",
    minHeight: "100vh",
  },
  item:{
    width:"80%",
    margin:"auto",
  },
  heading: {
    color: "tomato",
    padding: "2rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: "10px 0 5px 20px",
    textTransform: "uppercase",
    borderBottom: "2px solid tan",
  },
  logo:{
    width:"50px",
    margin:"10px 15px 20px 0",
  },
  logo2:{
    width:"10rem",
    backgroundColor:"#fff",
    margin:"10px 15px 20px 0",
  },
}));


const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
     <Typography variant="h4" align="center" className={classes.heading}>
        Skills
      </Typography>
      <Box component="div" className={classes.item}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Programming Languages
          </Typography>
          <img src={html5} alt="html5" className={classes.logo}/>
          <img src={css3} alt="css3" className={classes.logo}/>
          <img src={js} alt="js" className={classes.logo}/>
          <img src={python} alt="python" className={classes.logo}/>
          <img src={java} alt="java" className={classes.logo}/>
          <img src={c} alt="c" className={classes.logo}/>
          <img src={cpp} alt="cpp" className={classes.logo}/>          
      </Box>
      <Box component="div" className={classes.item}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Libraries & Frameworks
          </Typography>
          <img src={django} alt="django" className={classes.logo}/>          
          <img src={react} alt="react" className={classes.logo}/>          
          <img src={drs} alt="django-rest-framework" className={classes.logo2}/>          

      </Box>
      <Box component="div" className={classes.item}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Tools & Database
          </Typography>
          <img src={github} alt="github" className={classes.logo}/> 
          <img src={sqllite} alt="sqllite" className={classes.logo}/> 
          {/* <img src={postgres} alt="postgres" className={classes.logo}/>  */}
          <img src={mysql} alt="mysql" className={classes.logo}/> 
      </Box>
    </Box>
  );
};

export default Skills;
