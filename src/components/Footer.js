import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#090C10",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#F0F6FC",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} target="_blank" rel="noopener" href="https://github.com/asad2200"/>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} target="_blank" rel="noopener" href="https://www.linkedin.com/in/asad-jakhavala-7a2141159/"/>
      <BottomNavigationAction icon={<Twitter />} className={classes.root} target="_blank" rel="noopener" href="https://twitter.com/AJakhavala"/>
    </BottomNavigation>
  );
};
export default Footer;
