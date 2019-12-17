import React, {Suspense, lazy} from "react";
import {Route, Switch} from "react-router";

const Home = lazy(() => import("./home/Home"));
export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
