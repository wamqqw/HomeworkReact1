import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Book from './pages/book';
import Group from './pages/group';
import Recipe from './pages/recipe';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/book" element={<Book/>}/>
        <Route path="/group" element={<Group/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
    </Routes>
  </Router>    
  );
}

export default App;
