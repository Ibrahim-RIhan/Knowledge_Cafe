import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';



function App() {
  const [bookmarkN0, setbookmarkN0] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);
  const [bookmarks, setBookmarks] = useState([])
  const miniutesRead = (time) => {
    setTimeSpend(timeSpend + time)
  }
  const handleBookmark = (title) => {
    setbookmarkN0(bookmarkN0 + 1);
    if (bookmarks.includes(title)) {
      toast.error('Bookmark Already Added', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      setBookmarks([...bookmarks, title]);
      toast('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }


  };


  return (
    <div className="App container mx-auto">\
    <ToastContainer></ToastContainer>
      <Header></Header>
      <hr />
      <div className='row'>
        <div className='col-md-8'>
          <Card miniutesRead={miniutesRead}
            handleBookmark={handleBookmark}
          ></Card>
        </div>
        <div className='col-md-4 '>
          <Sidebar
            timeSpend={timeSpend}
            bookmarkN0={bookmarkN0}
            bookmarks={bookmarks}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
