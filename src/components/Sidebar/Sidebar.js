import React from 'react';
import './Sidebar.css'

const Sidebar = ({timeSpend}) => {

   
    return (
        <div className=''>
           <div className='border mb-5 rounded border-primary py-3 '>
<h5 className='fw-bold text-success'>Spent time on read  : {timeSpend}</h5>
           </div>
           <div className='bookmarksBar p-3 rounded sticky-top'>
<h4>Bookmarks added : {}</h4>
           </div>
        </div>
    );
};

export default Sidebar;