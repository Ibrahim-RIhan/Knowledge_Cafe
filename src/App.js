import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';



function App() {

  const [timeSpend, setTimeSpend] = useState(0);
  const miniutesRead = (time) => {
    setTimeSpend(timeSpend + time)
  }


  return (
    <div className="App container mx-auto">
      <Header></Header>
      <hr />
      <div className='row'>
        <div className='col-md-8'>
          <Card miniutesRead={miniutesRead}></Card>
        </div>
        <div className='col-md-4 '>
          <Sidebar timeSpend={timeSpend}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
