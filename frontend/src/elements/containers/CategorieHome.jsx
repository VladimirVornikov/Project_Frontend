import React, {useEffect} from "react";
import style from "./CategorieHome.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesList} from "../../store/asyncAction/categorie";
import AllCategoriesBtn from "../buttonCard/AllCategoriesBtn";
import { Link } from "react-router-dom";
import Title from "../inputs/Title";

export default function CategorieHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, []);

    return (
        <div className={style.CategorieHomeContainer}>
            <span className={style.spanCategories}>
                <Title title={"Categories"}/>
                <hr className={style.hr}/>
                <Link to="/categories">
                    <AllCategoriesBtn/>
                </Link>
            </span>
            <div className={style.categoriesContainer}>
                {categories.slice(0, -1).map((categorie) => (
                    <div key={categorie.id} className={style.categorieDiv}>
                        <img className={style.img}
                            src={`http://localhost:3333${categorie.image}`}
                        />
                        <p className={style.p}>{categorie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
