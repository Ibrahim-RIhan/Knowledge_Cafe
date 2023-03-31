import React from 'react';
import './SingleCard.css'
import user from '../../images/user-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const { img, name, title, time, date,  } = props.data;
   const miniutesRead = props.miniutesRead
   const handleBookmark =props.handleBookmark;
  
    return (
        <div className='SingleCard'>
            <div class="card mb-3">
                <img className='img-fluid' src={img} alt="" />
                <div class="card-body lh-base">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='rounded-1' src={user} alt="" />
                            <div className='lh-1'>
                                <h6 className='fw-bold'>{name}</h6>
                                <p className='text-secondary ms-3'>{date}</p>
                            </div>
                        </div>

                        <p onClick={()=>handleBookmark(title)} >{time} min read <FontAwesomeIcon icon={faBookBookmark} /></p>

                    </div>
                    <div className='text-start my-3'>
                        <h1 className='fs-2 text fw-bold'>{title}</h1>
                        <p className='text-secondary'>#Hashtag    #hashtag</p>
                        <button type="button" class="btn btn-link text-secondary" onClick={() =>miniutesRead(time)}>Mark as read</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCard;