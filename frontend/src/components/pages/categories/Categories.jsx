import React, {useEffect} from "react";
import style from "./Categories.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesList} from "../../../store/asyncAction/categorie";
import Breadcrumbs from "../../../elements/inputs/Breadcrumbs";
import Title from "../../../elements/inputs/Title";

export default function CategorieHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, []);

    return (
            <div className={style.CategoriesContainer}>
                <span className={style.spanCategories}>
                    <Title title={"Categories"}/>
                </span>
                <div className={style.categoriesContainer}>
                    {categories.map((categorie) => (
                        <div key={categorie.id} className={style.categorieDiv}>
                            <img
                                className={style.img}
                                src={`http://localhost:3333${categorie.image}`}
                            />
                            <p className={style.p}>{categorie.title}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}
