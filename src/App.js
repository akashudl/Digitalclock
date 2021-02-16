import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import User from './User/User';
import Counter from './Incrnum/Counter';

import DateandTime from './Component/DateandTime';
class App extends Component
{  
 
  render()
  {     
    return (
          <div style={{background:"grey"}}>
            <h1 style={{textAlign:'Center'}}>Welcome To React</h1>
          <User
          username="Akash"/>
          <DateandTime />
           
                      </div>
    );
  }
}

export default App;
