import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} /> 
      </LanguageProvider>
    </Router>
  );
}

export default App;
