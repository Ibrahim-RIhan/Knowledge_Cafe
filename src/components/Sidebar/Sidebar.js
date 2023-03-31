import React from 'react';
import './Sidebar.css'
import Bookmarks from '../Bookmarks/Bookmarks';

const Sidebar = ({ timeSpend, bookmarkN0, bookmarks }) => {


    return (
        <div className=''>
            <div className='border mb-5 rounded border-primary py-3 '>
                <h5 className='fw-bold text-success'>Spent time on read  : {timeSpend}</h5>
            </div>
            <div className='bookmarksBar p-3 rounded sticky-top'>
                <h4 className='mt-2'>Bookmarks added : {bookmarkN0}</h4>
              <div className='p-3'>
             {
                bookmarks.map(bookmark => <Bookmarks bookmark={bookmark}></Bookmarks>)
             }
              </div>
            </div>
        </div>
    );
};

export default Sidebar;