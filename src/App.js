import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import React from "react";

import { Route, Switch } from "react-router-dom";

import Events from "./pages/Events";
import Parents from "./pages/Parents";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Breadcrumbs from "./components/Breadcrumb/Breadcrumb";
import NavBar from "./components/NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex-row",
  },

  content: {
    flexGrow: 1,
    backgroundColor: "#f3f3f3",
  },
  container: {
    paddingBottom: theme.spacing(1),
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
      <Breadcrumbs />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/" component={Teachers} />
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
