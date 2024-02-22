import {fetchCategoriesList} from "../../store/asyncAction/fetchCategories";
import {useDispatch, useSelector} from "react-redux";
import ShowButton from "../buttonCard/ShowButton";
import style from "./CategoriesHome.module.css";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Title from "../inputs/Title";
import { ROOT_URL } from "../..";

export default function CategoriesHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, []);

    return (
        <div className={style.categorie_home_container}>
            <span className={style.spanCategories}>
                <Title title={"Categories"} />
                <hr className={style.hr} />
                <Link to="/Categories">
                    <ShowButton title={"All categories"} />
                </Link>
            </span>
            <div className={style.categories_container}>
                {categories.slice(0, -1).map((categorie) => (
                    <div key={categorie.id} className={style.categorie_div}>
                        <Link to={`/Categories/${categorie.id}`}>
                            <img
                                className={style.img}
                                src={`${ROOT_URL}${categorie.image}`}
                            />
                        </Link>
                        <p className={style.p}>{categorie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
