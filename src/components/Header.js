import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.svg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: theme.spacing(1),
    marginTop:"-80px",
  },
  titlesection:{
    marginTop:"-80px",
  },
  title: {
    color: "#D4DFEC",
  },
  subtitle: {
    color: "tomato",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  btn:{
    backgroundColor:"tomato",
    color:"#F0F6FC",
    marginTop:"10px",
    '&:hover': {
      backgroundColor: 'tomato',
      opacity:"0.7",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        {/* <Avatar variant="square" className={classes.avatar} src={avatar} alt="Asad Jakhavala" /> */}
        <img src={avatar} className={classes.avatar} alt="Asad Jakhavala"></img>
      </Grid>
      <Box className={classes.titlesection}>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Asad Jakhavala"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Full Stack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Button variant="contained" className={classes.btn} href="#">
            View Resume
        </Button>
      </Box>      
    </Box>
  );
};

export default Header;
