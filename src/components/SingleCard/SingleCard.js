import React from 'react';
import './SingleCard.css'
import user from '../../images/user-1.png'

const SingleCard = (props) => {
    const { img, name, title, time, date } = props.data;
    return (
        <div className='SingleCard'>
            <div class="card mb-3">
                <img className='img-fluid' src={img} alt="" />
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={user} alt="" />
                            <div >
                                <h6 className='fw-bold'>{name}</h6>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div>
                            <p>{time}</p>

                        </div>
                    </div>
                    <div className='text-start'>
                    <h1>{title}</h1>
                    <p>#Hashtag</p>
                    <button>Mark as read</button>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default SingleCard;