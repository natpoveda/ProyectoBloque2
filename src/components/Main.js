import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SeccionContainer from "../containers/SeccionContainer";
import { secciones } from "./Menu";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route
          path="/secciones/:id"
          render={({ match }) => {
            console.log("Match-->", match);
            const seccion = secciones.find((sec) => sec.id === match.params.id);
            return <SeccionContainer idSec={seccion} match={match} />;
          }}
        />
      </Switch>
    </main>
  );
};

export default Main;
