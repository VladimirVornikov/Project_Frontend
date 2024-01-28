import DiscountInfoContainer from '../../../elements/containers/DiscountInfoContainer'
import GetDiscountContainer from '../../../elements/containers/GetDiscountContainer'
import CategorieHome from '../../../elements/containers/CategoriesHome'
import RenderingPage from '../renderingPage/RenderingPage'
import React from 'react'

export default function Home() {
  return (
    <div>
        <DiscountInfoContainer/>
        <CategorieHome/>
        <GetDiscountContainer/>
        <RenderingPage type={"Sale"}/>
    </div>
  )
}
