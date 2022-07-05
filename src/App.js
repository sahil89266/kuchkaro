import './App.css';
import Initiative from './routes/initiative';
import Contact from './routes/contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from './routes/gallery';
import Home from './routes/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/init" component={Initiative} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </BrowserRouter>
    </div>  
  );
}

export default App;
