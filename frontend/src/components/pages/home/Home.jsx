import React from 'react'
import DiscountInfoContainer from '../../../elements/containers/DiscountInfoContainer'
import GetDiscountContainer from '../../../elements/containers/GetDiscountContainer'
import CategorieHome from '../../../elements/containers/CategorieHome'

export default function Home() {
  return (
    <div>
        <DiscountInfoContainer/>
        <GetDiscountContainer/>
        <CategorieHome/>
    </div>
  )
}
