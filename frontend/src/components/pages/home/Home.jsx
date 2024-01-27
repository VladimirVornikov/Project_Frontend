import React from 'react'
import DiscountInfoContainer from '../../../elements/containers/DiscountInfoContainer'
import GetDiscountContainer from '../../../elements/containers/GetDiscountContainer'
import CategorieHome from '../../../elements/containers/CategoriesHome'
import SaleHome from '../../../elements/containers/SaleHome'

export default function Home() {
  return (
    <div>
        <DiscountInfoContainer/>
        <CategorieHome/>
        <GetDiscountContainer/>
        <SaleHome/>
    </div>
  )
}
