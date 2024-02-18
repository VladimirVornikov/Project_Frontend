import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from './Breadcrumbs.module.css'

function changeIndexToName(array) {
    const listName = {
        1: "Annuals",
        2: "Nursery",
        3: "Garden Art",
        4: "Plant Care",
        5: "Seasonal",
    }

    const listProduct = {
        1: "Savannah Summer",
        2: "Angelonia angustifolia White",
        3: "Angelonia angustifolia Blue ",
        4: "Afternoon Tea",
        5: "Angelonia Angelissa",
        6: "Lantana camara",
        7: "Salvia `Wendy`s Wish`",
        8: "Datura metel",
        9: "Amaryllis 'Spartacus'",
        10: "Amaryllis 'Picotee'",
        11: "Amaryllis 'Samba'",
        12: "Amaryllis 'Yellow Star'",
        13: "Amaryllis 'King Star'",
        14: "Amaryllis 'Lion King'",
        15: "Amaryllis 'Rilona'",
        16: "Enchanted Graden",
        17: "Cast Stone",
        18: "Entwined Vine Stone",
        19: "Apline Birdhouse",
        20: "Artful Apples Quartet",
        21: "Autumn Acorn Quartet",
        22: "Blissful Harvest",
        23: "Espoma Organic Potpourri",
        24: "Espoma Organic Orchid",
        25: "Espoma Organic Perlite",
        26: "Fox Farm Happy",
        27: "Ocean Forest Potting",
        28: "Hoffman`s Horticulture",
        29: "Bonide Diatomaceous",
        30: "Father Christmas",
        31: "Christmas Pick Up Truck",
        32: "Ceramic Gold Linen",
        33: "Red & White Ceramic",
        34: "Christmas Double Pine",
        35: "Christmas Wreath Flower",
    }

    const loopLimitList = array.length === 2 ? array.length : array.length - 1;
    
    for (let i = 0; i < loopLimitList; i++) {
        const index = array[i];
        if (listName.hasOwnProperty(index)) {
            array[i] = listName[index];
        }
    }

    for (let i = 0; i < array.length; i++) {
        const index = array[i];
        if (listProduct.hasOwnProperty(index)) {
            array[i] = listProduct[index];
        }
    }
    

    return array;
}

function changeLink(string) {
    switch(string) {
        case "Annuals":
            return "Categories/1"
        case "Nursery":
            return "Categories/2"
        case "Garden Art":
            return "Categories/3"
        case "Plant Care":
            return "Categories/4"
        case "Seasonal":
            return "Categories/5"
        default:
            return string
    }
}

function separateCamelCase(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1 $2');
}
export default function Breadcrumbs() {

    const location = useLocation();
    console.log(location.pathname);
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
                            {crum.charAt(0).toUpperCase().concat(crum.slice(1))}
                        </button>
                    </Link>
                ))}
            </div>
        )
    }
}
