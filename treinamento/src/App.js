import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm';
import TextArea from './components/TextArea';
import Select from './components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    
    <div className="App">
      
      <body>
        <div className = 'container'>  
          <div className = 'container'>
          <NameForm/>          
          </div>
          <div className = 'container'>
            <TextArea/>
          </div>
          <div className = 'container'>
            <Select/>
          </div>
        </div>
        
        
        
      </body>
    </div>
  );
}

export default App;
