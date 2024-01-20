import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';
import "./style.scss";

const Details = () => {
  const { mediaType, id } = useParams();
  const {data, loding}= useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits, loding: creditsLoding}= useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
   <DetailsBanner video= {data?.results?.[0]} crew= {credits?.crew}/>
   <Cast data={credits?.cast} loading= {creditsLoding}/>
   <VideosSection data={data} loading={loding}/>
   <Similar mediaType={mediaType} id={id}/>
   <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details;