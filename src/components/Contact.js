import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#090C10",
    height: "100vh",
  },
  detail: {
    color: "#F0F6FC",
    textAlign: "center",
    marginBottom:"2px",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "#F0F6FC",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "#F0F6FC",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F0F6FC",
      },
      "&:hover fieldset": {
        borderColor: "#F0F6FC",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#F0F6FC",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  var sendMail = (e) => {
    e.preventDefault();
    window.open(`mailto:asadjakhavala92@gmail.com?subject=${name}-contact-you&body=${body}`);
  }

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <Typography className={classes.detail}>
                      asadjakhavala92@gmail.com<br/>
            </Typography>
            <Typography className={classes.detail}>
                      +91 9512767792
           </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={sendMail}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
