import { capitalize, changeIndexToName, changeLink, separateCamelCase } from './breadFunctions'
import {Link, useLocation} from 'react-router-dom'
import style from './Breadcrumbs.module.css'
import React from 'react'

export default function Breadcrumbs() {

    const location = useLocation();
    const site = ["Categories", "AllSales", "AllProducts"]
    const splitLocation = changeIndexToName(location.pathname.split('/').slice(1))
    const crumbs = splitLocation.map(elem => separateCamelCase(elem))


    
    if(site.some(category => splitLocation.includes(category))) {
        return (
            <div className={style.BreadcrumbsContainer}>
                <Link to={"/"}>
                    <button className={style.BreadcrumbsBtn}>Main page</button>
                </Link>
                {crumbs.map((crum, index) => (
                    <Link key={index} to={ index === crumbs.length -1 ? location.pathname :`/${changeLink(crum)}`}>
                        <div  className={style.line}/>
                        <button key={index}  className={index === crumbs.length - 1 ? style.BreadcrumbsBtnLast : style.BreadcrumbsBtn}>
                            {capitalize(crum)}
                        </button>
                    </Link>
                ))}
            </div>
        )
    }
}
