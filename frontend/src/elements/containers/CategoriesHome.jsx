import React, {useEffect} from "react";
import style from "./CategoriesHome.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesList} from "../../store/asyncAction/fetchCategories";
import ShowButton from "../buttonCard/ShowButton";
import {Link} from "react-router-dom";
import Title from "../inputs/Title";

export default function CategoriesHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, []);

    return (
        <div className={style.categorieHomeContainer}>
            <span className={style.spanCategories}>
                <Title title={"Categories"} />
                <hr className={style.hr} />
                <Link to="/Categories">
                    <ShowButton title={"All categories"} />
                </Link>
            </span>
            <div className={style.categoriesContainer}>
                {categories.slice(0, -1).map((categorie) => (
                    <div key={categorie.id} className={style.categorieDiv}>
                        <Link to={`/Categories/${categorie.id}`}>
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
