import {fetchCategoriesList} from "../../../store/asyncAction/fetchCategories";
import {useDispatch, useSelector} from "react-redux";
import Title from "../../../elements/inputs/Title";
import style from "./Categories.module.css";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { ROOT_URL } from "../../..";

export default function CategorieHome() {
    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();
    console.log(categories);

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, []);

    return (
        <div className={style.categories_wrapper}>
            <Title title={"Categories"} />
            <div className={style.categories_container}>
                {categories.map((categorie) => (
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
