import React from 'react';

const Bookmarks = ({bookmark}) => {
    return (
        <div className='card p-4 rounded mt-1 mb-3'>
            <h4 className='fs-5 fw-bolder'>{bookmark}</h4>
        </div>
    )
};

export default Bookmarks;