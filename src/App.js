import React from 'react';
import routes from './routes/routes';
import Header from './components/header/Header';
import './css/styles.css';


function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
