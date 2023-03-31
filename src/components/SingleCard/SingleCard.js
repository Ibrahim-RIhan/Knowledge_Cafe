import React from 'react';
import './SingleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const { img, name, title, time, date, userImg} = props.data;
   const readingTime = props.readingTime
   const handleBookmark =props.handleBookmark;
  
    return (
        <div className='SingleCard'>
            <div className="card mb-3">
                <img className='img-fluid' src={img} alt="" />
                <div className="card-body lh-base">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='rounded-circle userImg' src={userImg} alt="" />
                            <div className='lh-1'>
                                <h6 className='fw-bold ms-3 fs-5'>{name}</h6>
                                <p className='text-secondary ms-3'>{date}</p>
                            </div>
                        </div>

                       
                        <button type="button" className="btn btn-link timeRead"
                     onClick={()=>handleBookmark(title)} >{time} min read <FontAwesomeIcon icon={faBookBookmark} /></button>

                    </div>
                    <div className='text-start my-3'>
                        <h1 className='fs-1 text fw-bold'>{title}</h1>
                        <p className='text-secondary'>#Hashtag    #hashtag</p>
                        <button type="button" className="btn btn-link markRead" onClick={() =>readingTime(time)}>Mark as read</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCard;