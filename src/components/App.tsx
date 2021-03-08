import * as React from 'react';
import * as CSS from 'csstype';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { TextPage } from './TextPage';
import { TownPage } from './TownPage';

const rootStyle: CSS.Properties = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: 300,
  fontSize: '16px',
  letterSpacing: '0.025em',
  boxSizing: 'border-box',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',

  maxWidth: '540px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px',
};

const titleStyle: CSS.Properties = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

const repoLinkStyle: CSS.Properties = {
  fontSize: '14px',
};

const breadcrumbsStyle: CSS.Properties = {
  margin: '3vh 0',
};

export function convertName(path: string): string {
  path = path.substring(path.lastIndexOf("/") + 1);
  path = path.substring(0, 1).toUpperCase() + path.substring(1);
  let index = path.indexOf("_");
  while (index !== -1) {
    path = path.substring(0, index + 1) + path.substring(index + 1, index + 2).toUpperCase() + path.substring(index + 2);
    path = path.replace("_", " ")
    index = path.indexOf("_");
  }
  return path
}

export const App: React.VFC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bestiary" component={TextPage} />
      <Route path="/locations" component={TextPage} />
      <Route path="/npcs" component={TextPage} />
      <Route path="/towns" component={TownPage} />
    </Switch>
  </div>
);
