import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trinding from './trending/Trending';
import Popular from './popular/Populer';
import TopRated from './topRated/TopRated';



const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner/>
      <Trinding/>
      <Popular/>
      <TopRated/>
      {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default Home