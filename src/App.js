import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <hr />
      <div className='row'>
        <div className='col-md-8'>
<Card></Card>
        </div>
        <div className='col-md-4 '>
<Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
