
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Main } from './Template/Main';



function App() {
  return (

    <div className="App">
      <Router>
        
          <Main></Main>
        
      </Router>
    </div>

  );
}

export default App;
