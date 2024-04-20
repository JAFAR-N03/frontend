import React from 'react';
import './App.css';
import FrontScreen from './FrontScreen';
import FileSummarise from './FileSummarise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FrontScreen} />
        <Route path="/file-summarise" component={FileSummarise} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
