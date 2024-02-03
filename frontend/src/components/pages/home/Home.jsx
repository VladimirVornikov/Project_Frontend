import DiscountInfoContainer from '../../../elements/containers/DiscountInfoContainer'
import GetDiscountContainer from '../../../elements/containers/GetDiscountContainer'
import CategorieHome from '../../../elements/containers/CategoriesHome'
import RenderingPage from '../renderingPage/RenderingPage'
import React, { useRef } from 'react'

export default function Home() {

  const saleRef = useRef(null)
  const handleClick = () => saleRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

  return (
    <div>
        <DiscountInfoContainer handleClick={handleClick}/>
        <CategorieHome/>
        <GetDiscountContainer  ref={saleRef}/>
        <RenderingPage type={"Sale"}/>
    </div>
  )
}
