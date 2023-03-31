import React from 'react';
import './Sidebar.css'

const Sidebar = ({ timeSpend, bookmarkN0, bookmarks }) => {


    return (
        <div className=''>
            <div className='border mb-5 rounded border-primary py-3 '>
                <h5 className='fw-bold text-success'>Spent time on read  : {timeSpend}</h5>
            </div>
            <div className='bookmarksBar p-3 rounded sticky-top'>
                <h4>Bookmarks added : {bookmarkN0}</h4>
                <div>
                    <p>{bookmarks}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;