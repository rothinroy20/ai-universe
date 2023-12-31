import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        console.log('hello')
        setShowAll(true);
    }
  
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch(
                `https://openapi.programming-hero.com/api/ai/tools`
                );
                const value = await res.json();
                console.log(value.data.tools);
                setData(value.data.tools);
        };
        loadData()
      },[]);
  
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                 {data.slice(0, showAll ? 12 : 6).map((singleData) => (
                 <SingleData singleData={singleData} key={singleData.id}/>
               
                ))};
            </div>
            {!showAll && <span onClick={handleShowAll}>
                <Button>See More</Button>
                </span>
            }
        </>
    );
};

export default Card;