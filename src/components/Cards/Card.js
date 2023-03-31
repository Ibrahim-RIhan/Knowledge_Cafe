import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = ({miniutesRead,handleBookmark}) => {
    const [card , setCard] = useState([]);

    useEffect(()=>{
fetch('data.json')
.then(res => res.json())
.then(data => setCard(data))
    }, [])
    return (

        <div>
            {
                card.map(card =><SingleCard key={card.id} data ={card} miniutesRead={miniutesRead }
                    handleBookmark={handleBookmark}
                    ></SingleCard>)
            }

        </div>
    );
};

export default Card;