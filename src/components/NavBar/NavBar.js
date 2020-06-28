import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Icon,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";

import AsqualaSVG from "../../assets/asquala.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  imageIcon: {
    maxHeight: "100%",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  iconRoot: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Icon classes={{ root: classes.iconRoot }}>
            <img className={classes.imageIcon} src={AsqualaSVG} alt="asquala" />
          </Icon>
          <Button variant="contained" color="primary">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
