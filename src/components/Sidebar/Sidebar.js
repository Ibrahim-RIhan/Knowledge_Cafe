import React from 'react';
import './Sidebar.css'
import Bookmarks from '../Bookmarks/Bookmarks';

const Sidebar = ({ timeSpend, bookmarked, bookmarks }) => {


    return (
        <div className='sidebar'>
            <div className='border mb-5 rounded border-primary p-3 spentTime '>
                <h5 className='fs-3 fw-bolder'>Spent time on read  : {timeSpend}</h5>
            </div>
            <div className='bookmarkContainer p-3 rounded '>
                <h4 className='mt-2 fw-bolder fs-3'>Bookmarked Blogs : {bookmarked}</h4>
              <div className='p-3 bookmarksBar'>
             {
                bookmarks.map(bookmark => <Bookmarks bookmark={bookmark}></Bookmarks>)
             }
              </div>
            </div>
        </div>
    );
};

export default Sidebar;