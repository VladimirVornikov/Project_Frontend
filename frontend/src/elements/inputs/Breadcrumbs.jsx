import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
    const location = useLocation();
    const site = ["categories", "/"]
    console.log(location);
    const crumbs = location.pathname.split('/').slice(1)
    console.log(crumbs); 

    if(site.some(category => crumbs.includes(category))) {
        return (
          <div className={style.BreadcrumbsContainer}>
            <Link to={"/"}>
                <button className={style.BreadcrumbsBtn}>Main page</button>
            </Link>
            {crumbs.map((crum, index) => (
                
                <Link to={`/${crum}`}>
                    <div className={style.line}/>
                    <button key={index}  className={index === crumbs.length - 1 ? style.BreadcrumbsBtnLast : style.BreadcrumbsBtn}>
                        {crum.charAt(0).toUpperCase().concat(crum.slice(1))}
                    </button>
                </Link>
            ))}
          </div>
        )
    }

}
