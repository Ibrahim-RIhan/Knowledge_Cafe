import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Writings from './components/Writings/Writings';



function App() {
  const [bookmarked, setBookmarked] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);
  const [bookmarks, setBookmarks] = useState([])
  const readingTime = (time) => {
    setTimeSpend(timeSpend + time)
  }
  const handleBookmark = (title) => {
    setBookmarked(bookmarked + 1);
    if (bookmarks.includes(title)) {
      toast.error('Bookmark Already Added!!!!', {
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
      toast('Added as Bookmark!!!', {
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
          <Card
            readingTime={readingTime}
            handleBookmark={handleBookmark}
          ></Card>
        </div>
        <div className='col-md-4 '>
          <Sidebar
            timeSpend={timeSpend}
            bookmarked={bookmarked}
            bookmarks={bookmarks}
          ></Sidebar>
        </div>
      </div>
      <Writings></Writings>
    </div>
  );
}

export default App;
