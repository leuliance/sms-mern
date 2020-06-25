import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import React from "react";

import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import DashboardHome from "./pages/DashboardHome";
import Events from "./pages/Events";
import Parents from "./pages/Parents";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/" component={DashboardHome} />
            <Route exact path="/parents" component={Parents} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}

export default App;
