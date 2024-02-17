import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from './Breadcrumbs.module.css'

function changeIndexToName(array) {
    const listName = {
        1: "Annuals",
        2: "Nursery",
        3: "Garden Art",
        4: "Plant Care",
        5: "Seasonal"
    }

    for (let i = 0; i < array.length; i++) {
        const index = array[i];
        if (listName.hasOwnProperty(index)) {
            array[i] = listName[index];
        }
    }
    return array;
}

export default function Breadcrumbs() {

    const location = useLocation();
    const site = ["categories", "/", "allSale", "allProduct"]
    const crumbs = changeIndexToName(location.pathname.split('/').slice(1))
    
    if(site.some(category => crumbs.includes(category))) {
        return (
            <div className={style.BreadcrumbsContainer}>
                <Link to={"/"}>
                    <button className={style.BreadcrumbsBtn}>Main page</button>
                </Link>
                {crumbs.map((crum, index) => (
                    <Link key={index} to={`/${crum}`}>
                        <div  className={style.line}/>
                        <button key={index}  className={index === crumbs.length - 1 ? style.BreadcrumbsBtnLast : style.BreadcrumbsBtn}>
                            {crum.charAt(0).toUpperCase().concat(crum.slice(1))}
                        </button>
                    </Link>
                ))}
            </div>
        )
    }

}
