import React, {useEffect} from "react";
import style from "./Categories.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesList} from "../../../store/asyncAction/fetchCategories";
import Title from "../../../elements/inputs/Title";
import {Link} from "react-router-dom";

export default function CategorieHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, []);

    return (
        <div className={style.CategoriesContainer}>
            <Title title={"Categories"} />
            <div className={style.categoriesContainer}>
                {categories.map((categorie) => (
                    <div key={categorie.id} className={style.categorieDiv}>
                        <Link to={`/categories/${categorie.id}`}>
                            <img
                                className={style.img}
                                src={`http://localhost:3333${categorie.image}`}
                            />
                        </Link>
                        <p className={style.p}>{categorie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
