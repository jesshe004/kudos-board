import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
// import Form from './components/Form';
import Board from './components/Board';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  const title = 'Welcome to the new Blog'; 

  return (
    <Router>
      <div className="App">
          <Navbar /> 
          <Header />
          <div className = "content"> 
            <Routes>
              <Route exact path = "/" element={<Home/>}>
              </Route>
              <Route exact path = "/messageboard" element = {<Board/>}>
              </Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
