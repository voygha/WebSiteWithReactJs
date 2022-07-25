import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
//import components
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Servicies from './components/services/Servicies';
import Contact from './components/contac/Contac';
import Post from './components/post/Post';


function App() {
  return (
    <div>
      <Router>
	    <div>
	    	<Switch>
		        {/* Páginas */}
		        <Route exact path='/' component={Home} />
		        <Route path='/nosotros' component={Nosotros} />
		        <Route path='/servicios' component={Servicies} /> 
		        <Route path='/contacto' component={Contact} /> 
				<Route path='/post' component={Post}/>
	      	</Switch>
	    </div>
    </Router>
    </div>
  );
}

export default App;
