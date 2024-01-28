import React, {useEffect} from "react";
import style from "../containers/CategoriesHome.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ShowButton from "../buttonCard/ShowButton";
import {fetchAllSales} from "../../store/asyncAction/fetchCategories";
import Title from "../inputs/Title";

export default function SaleHome() {
    const categories = useSelector((store) => store.allProducts.products);
    const dispatch = useDispatch();
    console.log(categories);

    useEffect(() => {
        dispatch(fetchAllSales());
    }, []);

    return (
        <div className={style.CategorieHomeContainer}>
            <span className={style.spanCategories}>
                <Title title={"Sale"} />
                <hr className={style.hr} />
                <Link to="/allSales">
                    <ShowButton title={'All sales'}/>
                </Link>
            </span>
            <div className={style.categoriesContainer}>
                {categories.slice(0, 4).map((categorie) => (
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
