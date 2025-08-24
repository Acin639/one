import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const[apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTc3NTRmMjk5NGIxNGMyYmFiOTI2MWE2ZmM5N2IyNSIsIm5iZiI6MTc1MjA4MzgxMi4yNzIsInN1YiI6IjY4NmVhZDY0NjlmYTMxMTAwMDlhNTA4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xgyigvVcqKvT09rM5pIfJyyszyuseS4N2GYoKVs2iw'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='titleCards'>
      <h2>{title? title : "Popular on Lonestream"}</h2>
      <div className='scroll-wrapper'>
        <div className='card-list' >
          {apiData.map((card, index) => (
            <Link className='card' key={index} to={`/player/${card.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleCards;
