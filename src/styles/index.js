import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const buttonStyles = makeStyles({
  root: {
    textTransform: "none",
    margin: "3px",
    marginBottom: "8px",
    border: 0,
    borderRadius: 6,
    padding: "8px 20px",
  },
  notActive: {
    background: "white",
    color: "black",
    opacity: 0.5,
    "&:hover": {
      background: "rgba(88, 212, 115, 0.3);",
    },
  },
  active: {
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      background: "#58D573",
    },
  },
  single: {
    cursor: "pointer",
    textAlign: "center",
    width: "200px",
    margin: "auto",
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
  },
});

export const formStyles = makeStyles({
  registerComponent: {
    "text-align": "center",
  },
  registerForm: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    "flex-direction": "column",
    "& .MuiFormControl-root": {
      "margin-top": "40px",
    },
    "& input": {
      width: "100%",
    },
    "& button": {
      padding: "10px 30px",
      margin: "20px 0",
      "background-color": "#58d473",
      "border-color": "#58d473",
      "&:hover": {
        "background-color": "#12a245",
      },
    },
  },
});

export const cardStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const textBoxStyles = makeStyles({
  background: {
    border: "0",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1)",
    width: "175px",
    padding: "5px 7px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    background: "0",
    cursor: "pointer",
    border: "0",
    width: "10%",
  },
  textBox: {
    border: "0",
    borderRadius: "10px",
    background: "0",
    width: "85%",
    padding: "2px",
    height: "100%",
    fontSize: "1.5rem",
  },
});
